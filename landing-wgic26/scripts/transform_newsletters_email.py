# -*- coding: utf-8 -*-
"""Rewrite newsletters 6-10 pages in the original email format (white card,
green section bars, extracted photos, email-style CTA buttons)."""
import io
import re
import glob

IMG_CONFIG = {
    6: {1: ["photo-1.jpg", "photo-5.jpg"], 2: ["photo-6.jpg"], 3: ["photo-7.jpg"]},
    7: {1: ["photo-1.jpg"], 2: ["photo-5.jpg"], 3: ["photo-6.jpg"]},
    8: {1: ["photo-5.jpg", "photo-6.jpg"], 2: ["photo-7.jpg"]},
    9: {1: ["photo-5.jpg"], 2: ["photo-6.jpg"], 3: ["photo-7.jpg"]},
    10: {1: ["collage.jpg"], 2: ["photo-10.jpg"], 3: ["photo-11.jpg"]},
}

HEADER_RE = re.compile(
    r'<div className="text-center mb-12">\s*<h2 className="text-3xl font-bold text-white mb-2">\s*(.*?)\s*</h2>\s*</div>',
    re.DOTALL,
)
FOOTER_RE = re.compile(r'<NewsletterFooter language="(\w+)" />')
SECTION_RE = re.compile(
    r'(<div className="px-6 sm:px-10 py-8 space-y-5">.*?)(\n          </div>)',
    re.DOTALL,
)

files = sorted(glob.glob("src/app/newsletters/july2026-newsletter*-*/page.tsx"))
print(f"{len(files)} paginas")
anomalies = []

for path in files:
    m = re.search(r"july2026-newsletter(\d+)-(\w+)", path)
    nl, lang = int(m.group(1)), m.group(2)
    s = io.open(path, encoding="utf-8").read()
    stats = {"header": 0, "sections": 0, "links": 0, "cta": 0, "footer": 0, "imgs": 0}

    # A) section wrapper
    s = s.replace(
        '<section className="container mx-auto py-12 px-4">',
        '<section className="w-full py-10 px-4">',
    )

    # B) email card frame (preserve dir="rtl" when present)
    s, n = re.subn(
        r'<div className="max-w-4xl mx-auto space-y-8 text-white/80"( dir="rtl")?>',
        r'<div className="max-w-[640px] mx-auto bg-white text-neutral-700 shadow-2xl"\1>',
        s,
    )
    if n != 1:
        anomalies.append((path, "frame", n))

    # C) email header with logo
    def header_repl(mo):
        stats["header"] += 1
        title = mo.group(1)
        return (
            '<div className="px-6 sm:px-10 pt-8 pb-6 border-b border-neutral-200">\n'
            "            {/* eslint-disable-next-line @next/next/no-img-element */}\n"
            "            <img\n"
            '              src="/newsletters/img/wgic26-logo.png"\n'
            '              alt="WGIC26"\n'
            '              className="h-14 w-auto mb-4"\n'
            "            />\n"
            '            <h2 className="text-2xl font-bold text-cactus">\n'
            f"              {title}\n"
            "            </h2>\n"
            "          </div>"
        )

    s = HEADER_RE.sub(header_repl, s)

    # D) section containers
    s = s.replace(
        '<div className="space-y-6 pt-8 border-t border-white/10">',
        '<div className="px-6 sm:px-10 py-8 space-y-5">',
    )
    s = s.replace(
        '<div className="space-y-6">',
        '<div className="px-6 sm:px-10 py-8 space-y-5">',
    )

    # E) green bar titles
    s = s.replace(
        '<h3 className="text-2xl font-bold text-white">',
        '<h3 className="bg-cactus text-white text-xl sm:text-2xl font-bold px-6 sm:px-10 py-4 -mx-6 sm:-mx-10 -mt-8 mb-2">',
    )

    # F) links
    stats["links"] = s.count('className="text-potus"')
    s = s.replace(
        'className="text-potus"',
        'className="text-cactus font-semibold underline underline-offset-2 hover:text-monstera"',
    )

    # G) CTA block + buttons
    if '<div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/10">' in s:
        stats["cta"] = 1
    s = s.replace(
        '<div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/10">',
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

    # H) footer light variant
    s, n = FOOTER_RE.subn(r'<NewsletterFooter language="\1" light />', s)
    stats["footer"] = n

    # I) insert images at the end of configured sections
    config = IMG_CONFIG.get(nl, {})
    counter = {"i": 0}

    def section_repl(mo):
        counter["i"] += 1
        imgs = config.get(counter["i"], [])
        stats["imgs"] += len(imgs)
        insertion = ""
        for img in imgs:
            insertion += (
                '\n            <div className="-mx-6 sm:-mx-10 -mb-8 mt-6">\n'
                "              {/* eslint-disable-next-line @next/next/no-img-element */}\n"
                "              <img\n"
                f'                src="/newsletters/img/nl{nl}/{img}"\n'
                '                alt=""\n'
                '                className="w-full block"\n'
                "              />\n"
                "            </div>"
            )
        return mo.group(1) + insertion + mo.group(2)

    s = SECTION_RE.sub(section_repl, s)
    stats["sections"] = counter["i"]

    io.open(path, "w", encoding="utf-8", newline="\n").write(s)
    flag = ""
    if stats["header"] != 1 or stats["cta"] != 1 or stats["footer"] != 1:
        flag = "  <-- REVISAR"
    print(f"nl{nl}-{lang}: sections={stats['sections']} links={stats['links']} imgs={stats['imgs']}{flag}")

for a in anomalies:
    print("ANOMALIA:", a)
