# -*- coding: utf-8 -*-
"""Rewrite newsletters 1-5 (february2026 .. may2026-newsletter5) in the email
format: white 640px card, logo header, green section bars, extracted photos.

Handles two layouts:
- flat (nl2-nl5): top-level sections -> full-bleed green bars (like nl6-10)
- nested (nl1 february2026): intro wrapper + nested section -> contained bars
"""
import io
import re
import glob

BAR_FLAT = (
    '<h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold '
    'px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">'
)
BAR_NESTED = (
    '<h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold '
    'px-5 py-3 rounded-lg mb-4">'
)

HEADER_RE = re.compile(
    r'<div className="text-center mb-12">\s*<h2 className="text-3xl font-bold text-white mb-2">\s*(.*?)\s*</h2>\s*</div>',
    re.DOTALL,
)
FOOTER_RE = re.compile(r'<NewsletterFooter language="(\w+)" />')
SECTION_RE = re.compile(
    r'(<div className="px-6 sm:px-10 py-8 space-y-5">.*?)(\n          </div>)',
    re.DOTALL,
)
H3_RE = re.compile(
    r'<h3 className="text-2xl font-(?:bold|semibold) text-white(?: mb-\d)?">'
)

# per-family config ------------------------------------------------------------
CFG = {
    "february2026": {
        "nl": 1, "nested": True, "hero": "photo-1.jpg",
        "section_end": {1: [("photo-5.jpg", "bleed")]},
        "portraits_grid": {
            "anchor": '<div className="grid grid-cols-1 md:grid-cols-2 gap-6">',
            "imgs": ["photo-7.jpg", "photo-8.jpg", "photo-9.jpg", "photo-10.jpg"],
            "cols": "grid-cols-2",
        },
        "closing": "photo-11.jpg",
    },
    "march2026-newsletter2": {
        "nl": 2, "nested": False, "hero": None,
        "speaker_card_img": "photo-5.jpg",
        "closing": "photo-6.jpg",
    },
    "april2026-newsletter3": {
        "nl": 3, "nested": False, "hero": "photo-1.jpg",
        "closing": "photo-5.jpg",
    },
    "may2026-newsletter4": {
        "nl": 4, "nested": False, "hero": "photo-1.jpg",
        "section_end": {3: [("photo-12.jpg", "bleed")]},
        "portraits_grid": {
            "anchor": '<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">',
            "imgs": ["photo-5.jpg", "photo-6.jpg", "photo-7.jpg",
                     "photo-8.jpg", "photo-9.jpg", "photo-10.jpg",
                     "photo-11.jpg"],
            "cols": "grid-cols-2 sm:grid-cols-3",
        },
        "closing": "photo-13.jpg",
    },
    "may2026-newsletter5": {
        "nl": 5, "nested": False, "hero": "photo-1.jpg",
        "section_end": {2: [("photo-5.jpg", "portrait")]},
        "strip": {
            "anchor": '<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">',
            "img": "sponsors-strip.jpg",
        },
        "closing": "photo-11.jpg",
    },
}


def img_block(nl, fname, cls="w-full block", wrapper=None):
    img = (
        "{%s eslint-disable-next-line @next/next/no-img-element %s}\n"
        % ("/*", "*/")
        + '<img\n'
        + f'  src="/newsletters/img/nl{nl}/{fname}"\n'
        + '  alt=""\n'
        + f'  className="{cls}"\n'
        + "/>"
    )
    if wrapper:
        return wrapper.replace("@@", img)
    return img


def transform(path, fam, cfg):
    nl = cfg["nl"]
    s = io.open(path, encoding="utf-8").read()
    st = {"header": 0, "h3": 0, "links": 0, "cta": 0, "footer": 0, "imgs": 0}

    # --- 0) section wrapper
    s = s.replace(
        '<section className="container mx-auto py-12 px-4">',
        '<section className="w-full py-10 px-4">',
    )

    # --- 1) card frame (preserve dir="rtl")
    s, n = re.subn(
        r'<div className="max-w-4xl mx-auto space-y-8 text-white/80"( dir="rtl")?>',
        r'<div className="max-w-[640px] mx-auto bg-white text-neutral-700 shadow-2xl"\1>',
        s,
    )
    if n != 1:
        print(f"  ANOMALIA frame x{n}: {path}")

    # --- 2) header with logo (+ optional hero image right after)
    hero = cfg.get("hero")

    def header_repl(mo):
        st["header"] += 1
        out = (
            '<div className="px-6 sm:px-10 pt-8 pb-6 border-b border-neutral-200">\n'
            "            {/* eslint-disable-next-line @next/next/no-img-element */}\n"
            "            <img\n"
            '              src="/newsletters/img/wgic26-logo.png"\n'
            '              alt="WGIC26"\n'
            '              className="h-14 w-auto mb-4"\n'
            "            />\n"
            '            <h2 className="text-2xl font-bold text-cactus">\n'
            f"              {mo.group(1)}\n"
            "            </h2>\n"
            "          </div>"
        )
        if hero:
            st["imgs"] += 1
            out += (
                "\n          <div>\n"
                "            {/* eslint-disable-next-line @next/next/no-img-element */}\n"
                "            <img\n"
                f'              src="/newsletters/img/nl{nl}/{hero}"\n'
                '              alt=""\n'
                '              className="w-full block"\n'
                "            />\n"
                "          </div>"
            )
        return out

    s = HEADER_RE.sub(header_repl, s)

    # --- 3) section containers
    if cfg.get("nested"):
        # inner nested section (indent 12) first
        s = s.replace(
            "\n            " + '<div className="space-y-6 pt-8 border-t border-white/10">',
            "\n            " + '<div className="pt-8 mt-2 border-t border-neutral-200 space-y-5">',
        )
        # outer intro wrapper (indent 10 bare)
        s = s.replace(
            "\n          " + '<div className="space-y-6">',
            "\n          " + '<div className="px-6 sm:px-10 pt-8 space-y-6">',
        )
        # GI/NbS + key dates grid section
        s = s.replace(
            '<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">',
            '<div className="px-6 sm:px-10 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">',
        )
        # remaining top-level sections (indent 10)
        s = s.replace(
            '<div className="space-y-6 pt-8 border-t border-white/10">',
            '<div className="px-6 sm:px-10 py-8 space-y-5">',
        )
    else:
        s = s.replace(
            '<div className="space-y-6 pt-8 border-t border-white/10">',
            '<div className="px-6 sm:px-10 py-8 space-y-5">',
        )
        s = s.replace(
            '<div className="space-y-6">',
            '<div className="px-6 sm:px-10 py-8 space-y-5">',
        )

    # --- 4) green bar h3 titles
    bar = BAR_NESTED if cfg.get("nested") else BAR_FLAT
    s, st["h3"] = H3_RE.subn(bar, s)
    # key-dates box title (nl1)
    s = s.replace(
        '<h3 className="text-xl font-semibold text-white mb-4">',
        '<h3 className="text-xl font-semibold text-cactus mb-4">',
    )

    # --- 5) cards / boxes dark -> light
    for old in (
        "bg-gradient-to-br from-cactus/20 to-monstera/20 p-6 rounded-lg border border-white/10",
        "bg-cactus/10 p-6 rounded-lg border border-white/5 hover:bg-cactus/20 transition-colors",
        "bg-monstera/10 p-6 rounded-lg border border-white/5 hover:bg-monstera/20 transition-colors",
        "bg-sansiviera/10 p-6 rounded-lg border border-white/5 hover:bg-sansiviera/20 transition-colors",
    ):
        s = s.replace(old, "bg-neutral-50 p-6 rounded-lg border border-neutral-200")
    s = s.replace(
        "p-4 rounded-lg bg-white/5 border border-white/10",
        "p-4 rounded-lg bg-neutral-50 border border-neutral-200",
    )
    s = s.replace(
        "p-3 rounded-lg bg-white/5 border border-white/10 text-center",
        "p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-center",
    )

    # --- 6) CTA block + buttons
    for old_cta in (
        '<div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/10">',
        '<div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">',
    ):
        if old_cta in s:
            st["cta"] += 1
            s = s.replace(
                old_cta,
                '<div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-10 py-8">',
            )
    s = s.replace(
        '"inline-block border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition"',
        '"inline-block bg-cactus text-white font-semibold px-6 py-3 rounded hover:bg-monstera transition"',
    )
    s = s.replace(
        '"inline-block bg-potus text-black font-semibold px-6 py-3 rounded-lg hover:opacity-95 transition"',
        '"inline-block bg-potus text-cactus font-semibold px-6 py-3 rounded hover:brightness-95 transition"',
    )

    # --- 7) links + colour remap
    st["links"] = s.count('className="text-potus"')
    s = s.replace(
        'className="text-potus"',
        'className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"',
    )
    s = s.replace("text-potus", "text-cactus")
    s = s.replace("text-white/70", "text-neutral-600")
    s = s.replace("text-white/60", "text-neutral-500")
    s = s.replace("text-white/50", "text-neutral-400")
    s = s.replace("font-semibold text-white", "font-semibold text-neutral-800")
    s = s.replace("font-bold text-white", "font-bold text-neutral-800")
    s = re.sub(r"(?<!bg-cactus )text-white\b", "text-neutral-800", s)
    s = s.replace("border-white/10", "border-neutral-200")
    s = s.replace("border-white/5", "border-neutral-200")
    s = s.replace("bg-white/5", "bg-neutral-50")

    # --- 8) footer light variant + closing Barcelona photo before CTA
    s, n = FOOTER_RE.subn(r'<NewsletterFooter language="\1" light />', s)
    st["footer"] = n

    # --- 9) images
    if cfg.get("closing"):
        st["imgs"] += 1
        closing = (
            "          <div>\n"
            "            {/* eslint-disable-next-line @next/next/no-img-element */}\n"
            "            <img\n"
            f'              src="/newsletters/img/nl{nl}/{cfg["closing"]}"\n'
            '              alt=""\n'
            '              className="w-full block"\n'
            "            />\n"
            "          </div>\n"
        )
        marker = '<div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-10 py-8">'
        if marker in s:
            s = s.replace(marker, closing + "          " + marker, 1)
        else:
            print(f"  ANOMALIA cta-marker: {path}")

    if cfg.get("speaker_card_img"):
        st["imgs"] += 1
        card = '<div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">'
        img = (
            card + "\n"
            "              {/* eslint-disable-next-line @next/next/no-img-element */}\n"
            "              <img\n"
            f'                src="/newsletters/img/nl{nl}/{cfg["speaker_card_img"]}"\n'
            '                alt=""\n'
            '                className="w-full max-w-xs mx-auto rounded-md mb-4"\n'
            "              />"
        )
        if card in s:
            s = s.replace(card, img, 1)
        else:
            print(f"  ANOMALIA speaker-card: {path}")

    if cfg.get("portraits_grid"):
        pg = cfg["portraits_grid"]
        st["imgs"] += len(pg["imgs"])
        cells = ""
        for f in pg["imgs"]:
            cells += (
                "\n              {/* eslint-disable-next-line @next/next/no-img-element */}\n"
                "              <img\n"
                f'                src="/newsletters/img/nl{nl}/{f}"\n'
                '                alt=""\n'
                '                className="w-full aspect-square object-cover rounded-lg"\n'
                "              />"
            )
        grid = (
            f'<div className="grid {pg["cols"]} gap-2 mb-6">'
            + cells
            + "\n            </div>\n            "
            + pg["anchor"]
        )
        if pg["anchor"] in s:
            s = s.replace(pg["anchor"], grid, 1)
        else:
            print(f"  ANOMALIA portraits-anchor: {path}")

    if cfg.get("strip"):
        sp = cfg["strip"]
        st["imgs"] += 1
        block = (
            "<div>\n"
            "              {/* eslint-disable-next-line @next/next/no-img-element */}\n"
            "              <img\n"
            f'                src="/newsletters/img/nl{nl}/{sp["img"]}"\n'
            '                alt=""\n'
            '                className="w-full block"\n'
            "              />\n"
            "            </div>\n            "
            + sp["anchor"]
        )
        if sp["anchor"] in s:
            s = s.replace(sp["anchor"], block, 1)
        else:
            print(f"  ANOMALIA strip-anchor: {path}")

    if cfg.get("section_end"):
        counter = {"i": 0}

        def section_repl(mo):
            counter["i"] += 1
            insertion = ""
            for fname, style in cfg["section_end"].get(counter["i"], []):
                st["imgs"] += 1
                if style == "portrait":
                    insertion += (
                        '\n            <div className="mt-4">\n'
                        "              {/* eslint-disable-next-line @next/next/no-img-element */}\n"
                        "              <img\n"
                        f'                src="/newsletters/img/nl{nl}/{fname}"\n'
                        '                alt=""\n'
                        '                className="w-full max-w-md mx-auto rounded-lg"\n'
                        "              />\n"
                        "            </div>"
                    )
                else:  # bleed
                    insertion += (
                        '\n            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">\n'
                        "              {/* eslint-disable-next-line @next/next/no-img-element */}\n"
                        "              <img\n"
                        f'                src="/newsletters/img/nl{nl}/{fname}"\n'
                        '                alt=""\n'
                        '                className="w-full block"\n'
                        "              />\n"
                        "            </div>"
                    )
            return mo.group(1) + insertion + mo.group(2)

        s = SECTION_RE.sub(section_repl, s)
        st["sections"] = counter["i"]
    else:
        st["sections"] = len(SECTION_RE.findall(s))

    io.open(path, "w", encoding="utf-8", newline="\n").write(s)
    flag = ""
    if st["header"] != 1 or st["cta"] != 1 or st["footer"] != 1:
        flag = "  <-- REVISAR"
    print(
        f"nl{nl} {path.split('newsletters/')[-1]}: sections={st['sections']} "
        f"h3={st['h3']} links={st['links']} imgs={st['imgs']}{flag}"
    )


files = sorted(
    glob.glob("src/app/newsletters/february2026-*/page.tsx")
    + glob.glob("src/app/newsletters/march2026-newsletter2-*/page.tsx")
    + glob.glob("src/app/newsletters/april2026-newsletter3-*/page.tsx")
    + glob.glob("src/app/newsletters/may2026-newsletter4-*/page.tsx")
    + glob.glob("src/app/newsletters/may2026-newsletter5-*/page.tsx")
)
print(f"{len(files)} paginas")
for p in files:
    fam = re.search(r"newsletters/([a-z0-9-]+)-\w+/page\.tsx", p.replace("\\", "/")).group(1)
    # february2026-en -> family "february2026"; may2026-newsletter4-en -> "may2026-newsletter4"
    fam = re.sub(r"-(en|es|it|el|fr|pt|ar)$", "", p.replace("\\", "/").split("newsletters/")[1].split("/")[0])
    transform(p, fam, CFG[fam])
