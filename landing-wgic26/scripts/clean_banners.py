# -*- coding: utf-8 -*-
"""Generate text-free banner bases: detect the photo's bounding box and paint
everything outside it white. Originals stay untouched; outputs *-clean.jpg."""
import numpy as np
from PIL import Image

BANNERS = ["congress", "impact", "programme", "visits"]
SRC = "public/img/banners"


def photo_bbox(gray, axis):
    """Rango donde la foto (pixeles no blancos) es mayoritaria."""
    nonwhite = (gray < 225).mean(axis=axis)  # fraction per column/row
    idx = np.where(nonwhite > 0.3)[0]
    return int(idx.min()), int(idx.max())


def clean(name, kind):
    img = Image.open(f"{SRC}/banner-{name}-{kind}.jpg").convert("RGB")
    W, H = img.size
    gray = np.asarray(img.convert("L"), dtype=np.float32)
    arr = np.asarray(img).copy()
    if kind == "desktop":
        x0, x1 = photo_bbox(gray, axis=0)
        y0, y1 = photo_bbox(gray, axis=1)
        arr[:, :x0] = 255
        arr[:, x1 + 1 :] = 255
        arr[:y0, :] = 255
        arr[y1 + 1 :, :] = 255
        info = f"photo=({x0},{y0})-({x1},{y1})"
    else:
        # mobile: foto arriba, panel blanco abajo; el texto es oscuro y
        # confunde el bbox, asi que busco la primera fila de panel blanco
        row_mean = gray.mean(axis=1)
        row_std = gray.std(axis=1)
        edge = int(H * 0.36)
        for y in range(int(H * 0.15), H - 15):
            if row_mean[y] > 235 and row_std[y] < 20 and (row_mean[y : y + 15] > 235).all():
                edge = y
                break
        arr[edge:, :] = 255
        info = f"panel desde y={edge}"
    dst = f"{SRC}/banner-{name}-{kind}-clean.jpg"
    Image.fromarray(arr).save(dst, quality=90)
    print(f"{dst}  {info} de {W}x{H}")


for b in BANNERS:
    clean(b, "desktop")
    clean(b, "mobile")
