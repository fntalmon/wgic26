# Especificaciones del banner dinámico de home (HomeBannerSlider)

## Qué es

El home tiene ahora un slider/banner de imágenes a pantalla completa, similar a los de [The District Show](https://www.thedistrictshow.com/) y [REBUILD](https://www.rebuildexpo.com/):

- Cambio automático de slides cada 5 segundos.
- Transición fade de 700 ms.
- Dots de navegación en la parte inferior.
- Pausa al pasar el mouse.
- Soporte para imagen clickeable (CTA).

## Dónde está el componente

- `src/components/HomeBannerSlider.tsx`
- Se usa en `src/app/page.tsx`, reemplazando la imagen estática de Tibidabo.

## Medidas que necesitamos de los diseñadores

Los sitios de referencia usan **dos versiones por slide**: una para desktop y otra para mobile. El punto de corte es **414 px** (lo que se conoce como “mobile” vs. “desktop/tablet”).

### Opción recomendada (igual que The District / REBUILD)

| Versión | Resolución base | Ratio | Uso |
|---------|----------------|-------|-----|
| **Desktop** | **1350 × 604 px** | ~2.24 : 1 | Pantallas ≥ 414 px de ancho |
| **Mobile** | **320 × 408 px** | ~0.78 : 1 | Pantallas < 414 px de ancho |

### Versión retina / alta densidad (recomendado para que se vea nítido)

| Versión | Resolución | Notas |
|---------|-----------|-------|
| Desktop @2× | **2700 × 1208 px** | Ideal para pantallas retina |
| Mobile @2× | **640 × 816 px** | Ideal para móviles modernos |
| Desktop @3× | **4050 × 1812 px** | Máxima calidad, peso mayor |

> Si solo se entrega una versión, usar **Desktop 2700 × 1208 px** y **Mobile 640 × 816 px**.

### Alternativa: adaptado a las alturas actuales de WGIC26

Si prefieren ajustar el diseño a los tamaños que ya teníamos en la web (400 px / 550 px / 700 px de alto):

| Versión | Resolución | Ratio | Se vería en… |
|---------|-----------|-------|--------------|
| Desktop LG | **2700 × 1200 px** | 2.25 : 1 | Pantallas grandes (alto 700 px) |
| Desktop MD | **1600 × 880 px** | ~1.82 : 1 | Tablets / pantallas medianas (alto 550 px) |
| Mobile | **828 × 1062 px** | ~0.78 : 1 | Móviles (alto 400 px) |

> En la práctica, con entregar **Desktop 2700 × 1200 px** y **Mobile 828 × 1062 px** alcanza; el CSS recorta/escala lo necesario.

## Cómo se comporta cada imagen

- **Desktop:** la imagen cubre todo el ancho y alto del banner (`object-cover`), recortando por los lados si es necesario, y queda anclada **abajo al centro** (`object-bottom`).
- **Mobile:** la imagen se ajusta completamente dentro del alto del banner (`object-contain`), quedando anclada **abajo al centro**. Si el ancho de la imagen no llega a los bordes, se verá el fondo negro.

Por eso es importante que el contenido principal de cada diseño esté **centrado horizontalmente y preferentemente en la parte inferior/media** del arte.

## Formatos recomendados

- **WebP** como formato principal (mejor compresión).
- **PNG** si necesita transparencia o texto muy nítido.
- Peso objetivo por imagen: **< 200 KB en WebP**, **< 500 KB en PNG**.

## Consideraciones de diseño

1. **Fondo negro:** el contenedor del banner tiene fondo negro (`bg-black`). Si la imagen mobile no ocupa todo el ancho, los costados serán negros. Diseñar teniendo esto en cuenta.
2. **Safe area / zona segura:** evitar poner texto o elementos importantes muy cerca de los bordes. El contenido crítico debería estar dentro del centro de la imagen.
3. **Texto en la imagen:** si el banner lleva texto embebido, asegurar que sea legible tanto en desktop (panorámico) como en mobile (vertical). Alternativamente, el texto puede ir como HTML encima del banner (no soportado aún, pero se puede agregar).
4. **Número de slides:** recomendado entre 3 y 5 slides para no saturar.
5. **Consistencia visual:** todas las slides deberían compartir paleta, estilo de tipografía y tratamiento de imagen.

## Cómo agregar o cambiar slides

Editar `src/app/page.tsx` y modificar el array `slides` del componente `HomeBannerSlider`:

```tsx
<HomeBannerSlider
  slides={[
    {
      desktop: "/img/banner-desktop-1.webp",
      mobile: "/img/banner-mobile-1.webp",
      alt: "Texto alternativo descriptivo",
      // href: "/registration", // opcional: hace el slide clickeable
    },
    {
      desktop: "/img/banner-desktop-2.webp",
      mobile: "/img/banner-mobile-2.webp",
      alt: "Otro slide",
    },
  ]}
/>
```

Las imágenes deben colocarse en `public/img/`.

## Referencia técnica del componente

- Autoplay: 5000 ms (configurable vía prop `interval`).
- Transición: 700 ms fade.
- Breakpoint mobile/desktop: 414 px.
- Alturas del banner: 400 px (mobile) / 550 px (tablet) / 700 px (desktop).
- Accesible: incluye `aria-label`, `role="region"`, `aria-roledescription="carousel"` y dots navegables por teclado.
