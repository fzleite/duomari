"""Gera os icones do PWA a partir de codigo (nenhum asset binario versionado a mao).

Identidade: globo com paralelos e meridianos em verde e azul (Geografia), sobre fundo branco.
Rode com: python tools/gen_icons.py
"""

from pathlib import Path

from PIL import Image, ImageDraw

OUT = Path(__file__).resolve().parent.parent / "public" / "icons"
SS = 4  # supersampling para bordas suaves

WHITE = (255, 255, 255, 255)
OCEAN = (45, 106, 79, 255)      # verde profundo
LAND = (116, 198, 157, 255)     # verde claro
GRID = (255, 255, 255, 200)
ACCENT = (231, 111, 81, 255)    # terracota: o "ponto" de quem estuda


def draw_globe(size: int, art_ratio: float, background: tuple | None) -> Image.Image:
    canvas = size * SS
    img = Image.new("RGBA", (canvas, canvas), background or (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    art = canvas * art_ratio
    pad = (canvas - art) / 2
    x0, y0, x1, y1 = pad, pad, pad + art, pad + art
    cx, cy, r = (x0 + x1) / 2, (y0 + y1) / 2, art / 2
    line = max(2, int(art * 0.025))

    d.ellipse((x0, y0, x1, y1), fill=OCEAN)
    # duas "massas de terra" estilizadas
    d.ellipse((cx - r * 0.55, cy - r * 0.62, cx + r * 0.05, cy + r * 0.05), fill=LAND)
    d.ellipse((cx + r * 0.05, cy + r * 0.05, cx + r * 0.6, cy + r * 0.6), fill=LAND)
    # paralelos
    for k in (-0.5, 0, 0.5):
        yy = cy + k * r
        half = (r * r - (k * r) ** 2) ** 0.5
        d.line((cx - half, yy, cx + half, yy), fill=GRID, width=line)
    # meridianos (elipses concentricas)
    for k in (0.35, 0.75):
        d.ellipse((cx - r * k, y0, cx + r * k, y1), outline=GRID, width=line)
    d.line((cx, y0, cx, y1), fill=GRID, width=line)
    # alfinete de localizacao
    pr = r * 0.16
    d.ellipse((cx + r * 0.35 - pr, cy - r * 0.45 - pr, cx + r * 0.35 + pr, cy - r * 0.45 + pr), fill=ACCENT, outline=WHITE, width=line)

    return img.resize((size, size), Image.LANCZOS)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    draw_globe(192, 0.94, None).save(OUT / "icon-192.png")
    draw_globe(512, 0.94, None).save(OUT / "icon-512.png")
    draw_globe(512, 0.78, WHITE).save(OUT / "icon-512-maskable.png")
    draw_globe(180, 0.86, WHITE).save(OUT / "apple-touch-icon.png")
    draw_globe(32, 1.0, None).save(OUT / "favicon-32.png")
    print(f"icones gerados em {OUT}")


if __name__ == "__main__":
    main()
