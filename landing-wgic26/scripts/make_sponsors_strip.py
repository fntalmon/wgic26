# -*- coding: utf-8 -*-
"""Render the sponsor-logo strip of Newsletter 5 as a single image.

The 5 sponsor logos are separate images in the PDF (photo-6..photo-10, the
small ones after Dorothy Aseyo's portrait). We take the union of their
bounding boxes and render that clip at 150 dpi on white.
"""
import io
import sys
import pymupdf

PDF = "public/newsletters/Newsletter5Ingles.pdf"
OUT = "public/newsletters/img/nl5/sponsors-strip.jpg"

doc = pymupdf.open(PDF)
page = doc[0]

# Collect rects of all images, keyed by xref in document order
rects = []
for img in page.get_images(full=True):
    xref = img[0]
    try:
        r = page.get_image_rects(xref)
    except Exception:
        r = []
    for rect in r:
        rects.append((xref, rect))

rects.sort(key=lambda t: t[0])
for xref, r in rects:
    print(f"xref={xref} y0={r.y0:.0f} y1={r.y1:.0f} h={r.height:.0f} w={r.width:.0f}")

# Sponsor logos = small images in the mid-page strip (y ~ 1600-1900, h < 250)
strip = [r for _, r in rects if 1500 < r.y0 < 2000 and r.height < 250]
if not strip:
    print("NO ENCONTRE la tira de logos", file=sys.stderr)
    sys.exit(1)

union = strip[0]
for r in strip[1:]:
    union |= r
# small margin
union = pymupdf.Rect(union.x0 - 4, union.y0 - 4, union.x1 + 4, union.y1 + 4)
print(f"clip union: {union}")

pix = page.get_pixmap(clip=union, dpi=150, alpha=False)
pix.save(OUT)
print(f"guardado {OUT} ({pix.width}x{pix.height})")
