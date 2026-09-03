# Cambios web WGIC26 — Antes / Después

Estado al 3 de septiembre de 2026. Todo está aplicado en el código, **pendiente de commit + deploy** (la web publicada todavía no refleja nada de esto).

---

## HOME

**1. Botón de registro superior**
- ANTES: botón "Tickets" chico, poco visible, sin fecha de descuento.
- DESPUÉS: botón verde "Register now" más grande + badge verde "-15% until Sept 30" con pulso. Ambos enlazan directo a Helice (panel.helice.app).

**2. Franja superior fija**
- ANTES: texto de early bird sin fecha límite.
- DESPUÉS: "Register before September 30 and save 15%" (traducido a cada idioma), enlaza a Helice.

**3. Fechas early bird localizadas**
- ANTES: la fecha se mostraba igual en todos los idiomas.
- DESPUÉS: EN "September 30" / ES "30 de septiembre" / CA "30 de setembre" / FR "30 septembre" / PT "30 de setembro".

**4. "Programme" → "Program"**
- ANTES: mezcla de "programme" y "program" en los textos en inglés.
- DESPUÉS: todo unificado a "Program" (CTA de slides, módulo newsletter, footer, menú desplegable).

**5. Colores de CTAs**
- ANTES: algunos CTAs en amarillo (ponentes, posters), otros en verde.
- DESPUÉS: todos verdes, coherentes en toda la web.

**6. Texto justificado**
- ANTES: párrafos justificados (incluida una regla global en el CSS).
- DESPUÉS: todo alineado a la izquierda, más legible.

---

## MENÚ / NAVEGACIÓN

**7. Menú en francés y portugués se salía de la pantalla**
- ANTES: etiquetas largas ("Haut-parleurs", "Alto-falantes") que además significaban "altavoces" (error de traducción); el menú desbordaba.
- DESPUÉS: traducciones corregidas (FR "Intervenants", PT "Palestrantes") y etiquetas acortadas (FR: Conférenciers, Votre séjour, Exposants / PT: Palestrantes, Sua estadia, Expositores) + fuente un escalón más chica. Verificado con mediciones: FR 809px, PT 737px — entra en todos los breakpoints.

**8. Orden del menú**
- ANTES: Keynote Speakers después de News.
- DESPUÉS: Keynote Speakers antes que News, al lado de Program.

**9. Submenú de Program**
- ANTES: "Full Programme · 27-28 OCT".
- DESPUÉS: "Program · 27-28 OCT".

---

## PROGRAM (página principal)

**10. CTA de descarga del programa**
- ANTES: el botón "Download Program" estaba en Plan your stay.
- DESPUÉS: botón verde "Download Program (PDF)" en el encabezado de la página Program (quitado de Plan your stay).

---

## MAIN TOPICS

**11. Estructura y contenido**
- ANTES: varias fotos pequeñas intercaladas con el texto + acordeón "Key Topics" con 6 temas propios (Green Building Systems, Urban Planning, Water and Climate, Health and Biophilia, Global Challenges, Policy and Economy) + tabla.
- DESPUÉS: una sola foto hero arriba + todo el texto introductorio seguido + la lista validada por Gabriel **con las descripciones completas de cada tema** (copy de Mònica) en formato visual de tarjetas numeradas: 1) Strategies – Policies – Funding programmes, 2) Technologies – Market – GI/NBS – Standards, 3) Projects – Design, 4) Execution – Maintenance, 5) Education, 6) Impacts (tarjeta destacada con intro + los 8 subtemas, cada uno con su descripción) + los 3 Workshops con sus descripciones. Traducido a los 5 idiomas.

---

## WORKSHOPS

**12. Formato visual**
- ANTES: lista larga de texto.
- DESPUÉS: módulo 2+2 con foto de portada por workshop y el copy debajo, desplegables.

**13. CTAs de registro**
- ANTES: 3 CTAs de registro en la página.
- DESPUÉS: eliminado el módulo de registro que estaba bajo los workshops.

**14. Catalán**
- ANTES: "Ver més".
- DESPUÉS: "Veure'n més".

---

## TECHNICAL VISITS

**15. Texto introductorio**
- ANTES: terminaba con "Registration is now open through the official platform."
- DESPUÉS: frase eliminada (ya lo indica el módulo de registro).

**16. CTA duplicado**
- ANTES: había una llamada al registro después de las galerías (además de la de arriba).
- DESPUÉS: eliminada; queda solo la superior, que es la específica de las visitas.

**17. Header fijo**
- ANTES (en la web publicada): al hacer scroll el menú superior desaparecía en esta página.
- DESPUÉS: el header es fijo en toda la web; se resuelve al desplegar.

---

## INNOVATION DAY

**18. Fotos de workshops**
- ANTES: 2 fotos cuadradas por workshop, casi iguales entre sí.
- DESPUÉS: 1 sola foto horizontal (16:9) por workshop, la más atractiva.

**19. Módulo inferior**
- ANTES: módulo CTA de registro al final de la página.
- DESPUÉS: eliminado (queda el de arriba, específico de Innovation Day).

---

## WGIN AWARDS

**20. Módulos caducados**
- ANTES: módulo "Nominations open / Submit nomination" + texto "Nominations may be submitted until June 2026..." + tarjeta "Join Excellence".
- DESPUÉS: todo eliminado. Nuevo copy: "The World Green Infrastructure Awards recognise the world's best green infrastructure projects, policies and research. Presented by WGIN, the winners will be announced live at WGIC26." — con el enlace a la página oficial (awards.wgin.org) en la palabra "WGIN".

**21. Categorías**
- ANTES: 9 categorías con descripciones breves propias e íconos genéricos.
- DESPUÉS: 9 categorías con las **descripciones oficiales de WGIN** (validadas con Gabriel) y **foto oficial de cada categoría** (bajadas del sitio de WGIN, optimizadas), sin CTA. Encabezado: "The winners of the WGIN Awards 2026 are recognised in nine key categories." Traducido a los 5 idiomas.

**22. Títulos corregidos para coincidir con WGIN**
- "Green Neighborhood" → "Green Neighbourhood"
- "Unintended Vegetation" → "Unintended Greenery"
- "Green Infrastructure Research (Academic Work)" → "Green Infrastructure Research: Academic Work"
- "Green Infrastructure Research (Student Posters)" → "Green Infrastructure Research: Student Posters"

---

## KEYNOTE SPEAKERS

**23. Orden**
- ANTES: orden arbitrario.
- DESPUÉS: orden alfabético por apellido.

**24. Copy y textos**
- ANTES: dos párrafos introductorios antes de los speakers.
- DESPUÉS: copy nuevo arriba ("Meet the leading voices in green infrastructure..."), texto introductorio eliminado, los speakers aparecen directamente.

**25. Tamaño de las bios**
- ANTES: bios muy chicas, difíciles de leer sobre el fondo verde.
- DESPUÉS: bios un escalón más grandes (16px → 18px en pantallas medianas+) y con más contraste.

---

## BLOG

**26. Copy de cabecera**
- ANTES: copy anterior genérico.
- DESPUÉS: "The WGIC26 Blog — Green roofs, flooded streets, biodiversity that doesn't add up on paper. The debates driving WGIC26, before the congress opens."

**27. Tamaño de fotos**
- ANTES: fotos de las entradas en tamaños desiguales.
- DESPUÉS: todas 16:9 con recorte uniforme.

**27b. Foto del artículo destacado**
- ANTES: el artículo destacado (Green Infrastructure / Global South) tenía una imagen de campaña de gastronomía de Cataluña que no cuadraba con el texto.
- DESPUÉS: nueva portada con la fachada verde de un edificio (`/img/blog/global-south-cover.jpg`), coherente con el contenido.

---

## NEWSLETTERS

**28. Formato**
- ANTES: página con solo texto.
- DESPUÉS: formato de email completo (tarjeta blanca de 640px, logo, barras verdes, fotos extraídas de los PDFs, footer). Newsletters 1–10 completos en todos sus idiomas (~56 páginas).

**29. Enlaces de registro**
- ANTES: los CTAs de registro apuntaban a la propia web.
- DESPUÉS: todos apuntan a Helice (panel.helice.app).

**30. Logos**
- ANTES: algunos logos se veían con fondo negro.
- DESPUÉS: transparencias corregidas.

---

## PLAN YOUR STAY

**31. Hotel**
- ANTES: sección de un hotel.
- DESPUÉS: eliminada.

**32. Campaña de turismo**
- ANTES: Grand Tour de Catalunya / campaña enogastro.
- DESPUÉS: campaña de turismo cultural (Año Gaudí 2026) con enlace a catalunya.com/en/cultural-tourism-in-catalonia e intro "Feel our culture. Live Catalonia."

**33. Botón Download Program**
- ANTES: estaba en esta página.
- DESPUÉS: movido a Program (ver punto 10).

---

## FOOTER

**34. Primera columna**
- ANTES: "Ticket" y "Programme".
- DESPUÉS: "Register now" (a Helice) y "Program".

**35. Stay updated**
- ANTES: CTA grande de suscripción a la newsletter que competía con el de registro.
- DESPUÉS: texto normal, discreto.

---

## PENDIENTES (no son de código, hay que pedirlos)

- **Slides del header traducidas**: el texto está horneado en las imágenes → lo hace el diseñador (pedido en CAMBIOS-IMAGENES-DISENADOR.md).
- **Foto del blog destacado**: RESUELTO — se cambió la imagen de gastronomía por una fachada verde (`/img/blog/global-south-cover.jpg`).
- **Plan your stay**: Mònica definirá el contenido final más adelante.
