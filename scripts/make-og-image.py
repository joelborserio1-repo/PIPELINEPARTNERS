#!/usr/bin/env python3
"""
Generate the branded 1200x630 Open Graph share image for Pipeline Partners.
Dark base, one orange accent, the wave/flow motif arriving at a phone.
No external assets. Run: python3 scripts/make-og-image.py
Output: og-image.png in the repo root.
"""
import math
import os
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
INK = (10, 11, 14)
INK_SOFT = (16, 18, 24)
ACCENT = (255, 77, 20)
ACCENT_2 = (255, 122, 69)
ON_INK = (236, 235, 230)
DIM = (157, 162, 174)

img = Image.new("RGB", (W, H), INK)
d = ImageDraw.Draw(img, "RGBA")

# subtle vertical lift in the background
for y in range(H):
    t = y / H
    r = int(INK[0] + (INK_SOFT[0] - INK[0]) * (1 - t) * 0.6)
    g = int(INK[1] + (INK_SOFT[1] - INK[1]) * (1 - t) * 0.6)
    b = int(INK[2] + (INK_SOFT[2] - INK[2]) * (1 - t) * 0.6)
    d.line([(0, y), (W, y)], fill=(r, g, b))

# faint grid, masked toward the right where the motif lives
for gx in range(0, W, 64):
    d.line([(gx, 0), (gx, H)], fill=(255, 255, 255, 8))
for gy in range(0, H, 64):
    d.line([(0, gy), (W, gy)], fill=(255, 255, 255, 8))

# soft orange glow top-right (one controlled glow)
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
cx, cy, rad = 1000, 150, 360
for i in range(rad, 0, -2):
    a = int(70 * (i / rad) ** 2 * (1 - i / rad) * 6)
    a = max(0, min(60, a))
    gd.ellipse([cx - i, cy - i, cx + i, cy + i], fill=(255, 77, 20, a))
img.paste(Image.alpha_composite(img.convert("RGBA"), glow).convert("RGB"), (0, 0))
d = ImageDraw.Draw(img, "RGBA")


def load_font(size, bold=True):
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold
        else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf" if bold
        else "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
    ]
    for c in candidates:
        if os.path.exists(c):
            return ImageFont.truetype(c, size)
    return ImageFont.load_default()


# ---- wave / flow motif: confined to the right third, clear of all text ----
# pipes enter from the left edge of this column and converge into the hub
hub_x, hub_y = 1012, 312
pipe_starts = [(792, 168), (792, 312), (792, 456)]
for idx, (sx, sy) in enumerate(pipe_starts):
    pts = []
    steps = 60
    for s in range(steps + 1):
        t = s / steps
        # quadratic bezier: start -> control (bowed) -> hub
        ctrlx = (sx + hub_x) / 2
        ctrly = sy + (hub_y - sy) * 0.5
        x = (1 - t) ** 2 * sx + 2 * (1 - t) * t * ctrlx + t ** 2 * hub_x
        y = (1 - t) ** 2 * sy + 2 * (1 - t) * t * ctrly + t ** 2 * hub_y
        pts.append((x, y))
    # base pipe
    d.line(pts, fill=(255, 255, 255, 28), width=5, joint="curve")
    # glowing accent dash travelling along it (the lead in motion)
    seg = 14
    start = int(8 + idx * 13) % (len(pts) - seg - 1)
    for k in range(start, start + seg):
        d.line([pts[k], pts[k + 1]], fill=ACCENT, width=6, joint="curve")
    dotp = pts[start + seg]
    d.ellipse([dotp[0] - 7, dotp[1] - 7, dotp[0] + 7, dotp[1] + 7], fill=ACCENT)
    # small origin node where each pipe begins
    d.ellipse([sx - 6, sy - 6, sx + 6, sy + 6], outline=(255, 255, 255, 70), width=2)

# phone hub: rounded square with a pulse ring
d.ellipse([hub_x - 92, hub_y - 92, hub_x + 92, hub_y + 92], outline=(255, 77, 20, 70), width=3)
d.rounded_rectangle([hub_x - 62, hub_y - 62, hub_x + 62, hub_y + 62], radius=24,
                    fill=(28, 31, 40), outline=(255, 255, 255, 45), width=2)

# clean phone handset glyph (bowed handle + two angled pods), drawn on its own layer
phone = Image.new("RGBA", (W, H), (0, 0, 0, 0))
pd = ImageDraw.Draw(phone)
ax = math.radians(-45)  # handset axis
ux, uy = math.cos(ax), math.sin(ax)          # along-axis unit
nx, ny = -uy, ux                             # normal unit
L = 30                                        # half length of handset
A = (hub_x - ux * L, hub_y - uy * L)
B = (hub_x + ux * L, hub_y + uy * L)
ctrl = (hub_x + nx * 26, hub_y + ny * 26)     # bow the handle outward
handle = []
for s in range(31):
    t = s / 30
    x = (1 - t) ** 2 * A[0] + 2 * (1 - t) * t * ctrl[0] + t ** 2 * B[0]
    y = (1 - t) ** 2 * A[1] + 2 * (1 - t) * t * ctrl[1] + t ** 2 * B[1]
    handle.append((x, y))
pd.line(handle, fill=ACCENT, width=9, joint="curve")
# rounded caps
pd.ellipse([A[0] - 4, A[1] - 4, A[0] + 4, A[1] + 4], fill=ACCENT)
pd.ellipse([B[0] - 4, B[1] - 4, B[0] + 4, B[1] + 4], fill=ACCENT)
# ear and mouth pods, perpendicular capsules at each end
for end in (A, B):
    p1 = (end[0] - nx * 11, end[1] - ny * 11)
    p2 = (end[0] + nx * 11, end[1] + ny * 11)
    pd.line([p1, p2], fill=ACCENT, width=12, joint="curve")
img.paste(Image.alpha_composite(img.convert("RGBA"), phone).convert("RGB"), (0, 0))
d = ImageDraw.Draw(img, "RGBA")

# ---- brand mark top-left ----
mx, my = 80, 70
d.rounded_rectangle([mx, my, mx + 56, my + 56], radius=15, fill=ACCENT)
wave = []
for s in range(0, 41):
    t = s / 40
    x = mx + 12 + t * 32
    y = my + 38 - 16 * math.sin(t * math.pi)
    wave.append((x, y))
d.line(wave, fill=(255, 255, 255), width=5, joint="curve")
d.ellipse([mx + 8, my + 34, mx + 16, my + 42], fill=INK)
d.ellipse([mx + 40, my + 34, mx + 48, my + 42], fill=INK)

brand_font = load_font(30, bold=True)
d.text((mx + 72, my + 12), "Pipeline Partners", font=brand_font, fill=ON_INK)

# ---- headline (left column, x 80..720, three tight lines) ----
h1 = load_font(60, bold=True)
lh = 70
y0 = 196
d.text((80, y0), "Exclusive,", font=h1, fill=ON_INK)
d.text((80, y0 + lh), "guaranteed leads,", font=h1, fill=ON_INK)
d.text((80, y0 + lh * 2), "done for you.", font=h1, fill=ACCENT)

# supporting line
sub = load_font(28, bold=False)
d.text((82, y0 + lh * 3 + 16), "We run the marketing. You just answer the phone.",
       font=sub, fill=DIM)

# the promise line (plain words, not a pill cliche): a thin accent rule + words
py = y0 + lh * 3 + 74
d.line([(84, py + 12), (124, py + 12)], fill=ACCENT, width=4)
chip = load_font(24, bold=True)
d.text((140, py), "NO LEADS. NO PAY.", font=chip, fill=ACCENT_2)

img.save("og-image.png", "PNG")
print("wrote og-image.png", img.size)
