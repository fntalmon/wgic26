# Cambios de imágenes para el diseñador — Home WGIC26

Contexto: la cabecera de la web ahora es fija y muestra siempre el nombre completo
del congreso, las fechas (27–30 Oct) y el lugar (Barcelona & Lleida), más el botón
de registro. Además, **el texto de las slides ahora se genera en la web (HTML) y se
traduce automáticamente a los 5 idiomas** — ya no va dentro de la imagen.

Archivos afectados (en `public/img/banners/`, cada uno en versión desktop y mobile):
`banner-congress-*`, `banner-impact-*`, `banner-programme-*`, `banner-visits-*`.

## Qué necesitamos ahora: solo la foto, sin texto

Para cada slide, la imagen final debe ser **únicamente la composición visual**:

1. **Sin texto de ningún tipo**: ni título, ni subtítulo, ni CTA — todo eso lo pone
   la web encima del panel, traducido por idioma.
2. **Sin logo WGIC26** (ya aparece fijo en la cabecera y en "Organized by").
3. **Sin fechas ni lugar** (van en la franja fija superior).
4. **Sin números/estadísticas superpuestos** (120+ papers, 1000+ attendees…).
   Esos datos ya se muestran en el cuerpo de la página.
5. Mantener la estructura actual: desktop = panel en blanco a la izquierda (~52%)
   + foto a la derecha; mobile = foto arriba (~36%) + panel en blanco abajo.
   El texto se renderiza sobre ese panel en blanco.

> Mientras llegan las nuevas, la web ya usa versiones "limpias" generadas a partir
> de los banners actuales (misma foto, panel en blanco) con el texto traducido
> encima. Si las nuevas imágenes tardan, no hay bloqueo.

## Copys de referencia (los renderiza la web, NO van en la imagen)

### Slide 1 — `banner-congress`
> **World Green Infrastructure Congress 2026**
> The researchers, designers and city-makers building greener cities meet in
> Barcelona and Lleida. Register before September 30 and save 15%.

CTA: **GET YOUR EARLY BIRD TICKET →**

### Slide 2 — `banner-impact`
> **Climate resilience. Water. Health. Biodiversity. Green jobs.**
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
(Necesita imagen nueva: composición como las demás — panel en blanco + foto,
sin texto. En cuanto esté, la añadimos al slider con enlace a /program/workshops.)

### Slide 5 — `banner-visits`
> **Barcelona is the case study. Walk through it.**
> Exclusive technical visits to green roofs and vertical gardens, guided by the
> teams that built them. Limited places.

CTA: **DISCOVER THE TECHNICAL VISITS →**

## Slide eliminada

- **`banner-register` se elimina**: su mensaje (best rate / early bird) pasa a la
  slide 1. No hace falta nueva versión.

## Formato

Mantener los mismos tamaños/formatos actuales: `banner-*-desktop.jpg` (2700×1208)
y `banner-*-mobile.jpg` (640×816). Al reemplazar los archivos con el mismo nombre,
la web los usa automáticamente sin tocar código.
