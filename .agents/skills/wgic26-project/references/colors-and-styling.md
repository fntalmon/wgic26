# Colores y Estilos WGIC 26

## Paleta de Colores (OKLCH)

Definidos en `src/app/globals.css` con CSS variables + `@theme` de Tailwind v4:

| Token | Uso típico |
|-------|-----------|
| `cactus` | Fondos oscuros secundarios |
| `monstera` | Fondo principal (verde muy oscuro) |
| `sansiviera` | Verde oscuro intermedio |
| `potus` | Color de acento / botón primary (verde) |
| `mortar` | Gris oscuro |
| `cement` | Gris medio |
| `lagoon` | Azul |
| `rose` | Rosa |
| `lavanda` | Lila |
| `canary` | Amarillo |

## Patrones de UI

### Botones (shadcn custom)
- Efecto 3D con pseudo-elementos (`::before`, `::after`)
- Transform `skew` en hover y active
- Variantes: `default` (potus), `secondary`, `inverse`, `blue`, `yellow`, `purple`, `red`, `disabled`

### Headings
- Siempre `uppercase` con `font-weight: 400`
- `h1` a `h5` siguen esta regla

### Sections
- Padding responsive por defecto
- Fondos oscuros predominantes

### Blog Content
Clase `.blog-content` en `globals.css` con estilos extensos para:
- Listas (`ul`, `ol`)
- Blockquotes
- Tablas
- Imágenes
- Código inline
- Links

## Tailwind v4 Config

- `@import "tailwindcss"` en globals.css
- `@theme` para registrar colores custom
- `postcss.config.mjs` con `@tailwindcss/postcss`
- `tw-animate-css` para animaciones

## Fuentes

- `@fontsource-variable/martian-mono` — Martian Mono variable
- `next/font` para Geist (Vercel font)
