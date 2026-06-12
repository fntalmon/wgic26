# INSTRUCCIONES PARA KIMI CODE – Actualización Página de Patrocinios WGIC26

## Contexto
El sitio wgic26.org tiene una página de patrocinios (/sponsorship o /patrocinios) con información desactualizada. Se recibió un nuevo brochure de patrocinios (v0.4) y hay que reemplazar TODO el contenido existente de esa página con la nueva información.

## Archivo de datos adjunto
Usá el archivo `wgic26_sponsorship_data.json` como fuente única de verdad. NO inventes precios, tiers ni beneficios que no estén en ese JSON.

## Tareas a realizar

### 1. Sección Hero / Header
- Título: "WGIC26 – Congreso Mundial de Infraestructura Verde"
- Subtítulo: fechas (27-30 oct 2026) y sede (Barcelona y Lleida, España)
- Tagline: "Dando forma al futuro de la infraestructura verde en las ciudades"
- Badge especial: "Año de Gaudí – Barcelona Capital Mundial de la Arquitectura"

### 2. Sección "¿Por qué patrocinar?"
- Listar los 4 beneficios principales del JSON (`why_sponsor.benefits`)
- Agregar bullets de oportunidades de interacción (`why_sponsor.interaction_opportunities`)
- Agregar bullets de visibilidad de marca (`why_sponsor.brand_visibility_examples`)

### 3. Sección Audiencia
- Mostrar distribución porcentual (academia, privado, público)
- Listar sectores clave y perfiles típicos de asistentes
- Destacar: "Más de 30 países"

### 4. Sección Talleres Interactivos
- Mostrar los 3 talleres con título + descripción
- IDs: sur_global, salud_bienestar, post_conflicto

### 5. Tabla/Pricing de Paquetes de Patrocinio (CRÍTICO – reemplazar la vieja)
- 4 tiers: Diamante, Esmeralda, Platino, Oro
- Columnas a mostrar: Categoría, Inversión (€), Pases, Cena Gala, Oportunidad de Hablar, Nombramiento, Stand
- Destacar visualmente Diamante como EXCLUSIVO
- Oro debe mostrar "Solo Digital" en lugar de stand físico

### 6. Sección Complementos de Patrocinio
- Tabla o cards con: Item, Precio, Disponibilidad
- Resaltar los 3 items exclusivos (disponibilidad = 1)

### 7. Sección "El Jardín WGIC" – Zona de Exposición
- Explicar concepto: zona expo = corazón del congreso, almuerzos y coffee breaks ahí
- 3 stands: Jardín Grande (€8.000), Jardín Medio (€5.000), Flor/Pod (€3.000)
- Cada stand debe mostrar: espacio, servicios incluidos, branding, mobiliario, pases, precio
- Nota: "Stands llave en mano producidos por proveedores oficiales del lugar"

### 8. Sección Contacto / CTA
- Tel: +34 623 04 90 22
- Email: sponsorship@wgic26.org
- Web: wgic26.barcelona
- Botón/CTA: "Contactar equipo de patrocinios"

## Notas técnicas
- Responsive: la tabla de pricing debe ser scrollable horizontal en mobile
- Moneda: siempre mostrar € con separador de miles (ej: 30.000 €)
- Idioma: español
- No incluir timetables ni fechas de deadlines que no estén en el JSON
- Si hay componentes reutilizables (cards, tables), crearlos como componentes separados

## Stack (ajustar según corresponda)
Si el sitio es Laravel/Blade: usar componentes Blade con props.
Si el sitio es React/Vue: crear componentes funcionales que reciban el JSON como prop.
Si es HTML estático: generar markup semántico con clases BEM.

## Prioridad
1. Tabla de paquetes (Diamante/Oro/Esmeralda/Platino) – ESTO ES LO MÁS IMPORTANTE
2. Sección El Jardín WGIC (nueva, no existía antes)
3. Complementos de patrocinio
4. Resto del contenido
