# Cambios de imágenes para el diseñador — Home WGIC26

Contexto: la cabecera de la web ahora es fija y muestra siempre el nombre completo
del congreso, las fechas (27–30 Oct) y el lugar (Barcelona & Lleida), más el botón
de registro. Por eso las imágenes del slider ya no necesitan repetir esa información.

Archivos afectados (en `public/img/banners/`, cada uno en versión desktop y mobile):
`banner-congress-*`, `banner-impact-*`, `banner-programme-*`, `banner-visits-*`,
`banner-register-*`.

## Cambios generales (todas las slides)

1. **Quitar el logo WGIC26 de cada slide.** Ya aparece fijo arriba en la cabecera
   (y abajo en el bloque "Organized by"). Repetido 3 veces queda redundante.
2. **Quitar el nombre del congreso, fechas y lugar de cada slide.** Ahora van en la
   franja fija superior de la web.
3. **Quitar los números/estadísticas superpuestos en las fotos** (120+ papers,
   1000+ attendees, 35+ countries, 12th edition…). Complican la lectura y tapan las
   fotos de los espacios verdes. Esos datos ya se muestran en el cuerpo de la página.
4. Dejar en cada slide **solo el mensaje y un CTA claro**.

## Copys por slide

### Slide 1 — `banner-congress` (lleva además el mensaje "best rate", antes en la slide 5)
> **World Green Infrastructure Congress 2026**
> The researchers, designers and city-makers building greener cities meet in
> Barcelona and Lleida. Register before 30 September and save 15%.

CTA: **GET YOUR EARLY BIRD TICKET →**

### Slide 2 — `banner-impact`
> **Climate resilience. Water. Health. Biodiversity. Green jobs**
> 137 papers from 31 countries, gathered around one question: how green
> infrastructure builds a healthier and safer urban future.

CTA: **EXPLORE THE MAIN TOPICS →**

### Slide 3 — `banner-programme`
> **Two days of congress, one day across Barcelona, one day of research in Lleida**
> Six duet keynotes, five parallel tracks and 98 oral presentations from 31 countries.

CTA: **EXPLORE THE PROGRAMME →**

### Slide 4 — NUEVA imagen de workshops (`banner-workshops-desktop.jpg` / `banner-workshops-mobile.jpg`)
> **Health, the Global South, and cities rebuilding after disaster.**
> Three featured workshops taking green infrastructure into the conversations
> it rarely reaches.

CTA: **SEE THE FEATURED WORKSHOPS →**
(Necesita imagen nueva, desktop + mobile. En cuanto esté, la añadimos al slider
con enlace a /program/workshops.)

### Slide 5 — `banner-visits`
> **Barcelona is the case study. Walk through it.**
> Exclusive technical visits to green roofs and vertical gardens, guided by the
> teams that built them. Limited places.

CTA: **DISCOVER THE TECHNICAL VISITS →**

## Slide eliminada

- **`banner-register` se elimina**: su mensaje (best rate / early bird) pasa a la
  slide 1. No hace falta nueva versión.

## Formato

Mantener los mismos tamaños/formatos actuales: `banner-*-desktop.jpg` y
`banner-*-mobile.jpg`. Al reemplazar los archivos con el mismo nombre, la web los
usa automáticamente sin tocar código.
