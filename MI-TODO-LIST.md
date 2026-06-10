# Mi checklist: Que tengo que hacer yo (Federico)

**Proyecto:** Integracion API Barter para agenda y speakers WGIC 2026

---

## FASE 0: Lo que necesito de Barter ANTES de empezar

Pedirles esto por mail/Slack ahora mismo. Sin esto me trabo despues.

| # | Que pedir | Por que lo necesito | Que pasa si no lo tengo |
|---|---|---|---|
| 1 | **ID del evento REAL del WGIC 2026** (no el 246 de demo) | Para apuntar la API a los datos reales | Sigo desarrollando con demo y el dia del switch explota todo |
| 2 | **Token / API key que funcione para el evento real** | Para autenticarme en la API de produccion | No puedo leer los datos reales |
| 3 | **Fechas exactas del congreso** (ej: 12, 13, 14 de octubre 2026) | Para armar la navegacion por dia en la agenda | Los filtros de dia quedan mal o vacios |
| 4 | **Listado de salas del CCIB** que van a usar | Para armar los filtros de sala y el layout | Los filtros de sala no van a coincidir con la realidad |
| 5 | **Cantidad estimada de speakers** | Para decidir si hago paginacion o cargo todo junto | Si son 500 speakers y los cargo de una, se rompe la pagina |
| 6 | **Una sesion de 15 min para ver los datos reales juntos** | Para ver si las descripciones vienen con HTML, si las fotos se ven bien, si los horarios tienen formato consistente | Descubro problemas de datos cuando ya esta todo hecho y tengo que rehacer |
| 7 | **Contacto tecnico directo** (no solo comercial) | Para cuando la API me devuelva un error raro a las 5pm | Me quedo colgado esperando respuesta 2 dias |

**Mensaje para copiar y pegar:**
> *"Hola Anna, para poder arrancar la integracion necesito que me confirmen:*
> *1. ID del evento WGIC 2026 real en la plataforma*
> *2. Token/API key funcional para ese evento*
> *3. Fechas exactas del congreso*
> *4. Listado de salas del CCIB que van a usar*
> *5. Estimado de cantidad de speakers*
> *6. Una call rapida de 15 min para revisar juntos como vienen los datos (fotos, descripciones, horarios)*
> *7. Un contacto tecnico directo por si surgen dudas de la API*
> *Cuando tenga esto arranco sin demoras. Gracias!"*

---

## FASE 1: Prueba de concepto (1-2 dias)

**Que hacer:**
- [ ] Crear una ruta de prueba tipo `/program/agenda-test`
- [ ] Hacer un fetch a la API de Barter con el evento demo (246) y mostrar datos crudos
- [ ] Probar que las fotos de speakers se renderizan bien
- [ ] Verificar que los horarios y descripciones vienen en formato usable
- [ ] Probar en mobile que no se rompe

**Blockers en esta fase:**
- Ninguno. Esto lo puedo hacer YA con el evento 246 de demo.

---

## FASE 2: Desarrollo de la agenda (3-4 dias)

**Que hacer:**
- [ ] Disenar la grilla de sesiones (por dia, por hora)
- [ ] Armar filtros: por dia / sala / track / tipo de sesion
- [ ] Hacer la vista de detalle de una sesion (titulo, descripcion, speakers, horario, sala)
- [ ] Manejar las descripciones HTML que vienen de la API (renderizar limpio)
- [ ] Integrar con los colores y tipografia del sitio WGIC

**Blockers en esta fase:**
- Necesito las **fechas reales** del evento para armar la navegacion por dia.
- Necesito la **lista de salas reales** para que los filtros coincidan.
- Necesito ver **un ejemplo real de sesion** para saber si las descripciones vienen con HTML pesado, texto plano, o que.

**Si Barter no me da esto:** Puedo seguir con el demo, pero el dia del switch voy a tener que rehacer los filtros.

---

## FASE 3: Desarrollo de speakers (2-3 dias)

**Que hacer:**
- [ ] Disenar la grilla de speakers (foto, nombre, empresa, cargo)
- [ ] Armar filtros: por empresa / track / pais (o lo que decida el equipo)
- [ ] Hacer la vista de detalle de un speaker (bio + sesiones en las que participa)
- [ ] Verificar que las fotos se ven bien y no quedan pixeladas
- [ ] Linkear LinkedIn si el speaker lo tiene

**Blockers en esta fase:**
- Necesito saber **cuantos speakers seran** para decidir paginacion (20 por pagina? 50? todo junto?).
- Necesito confirmar que las **fotos se sirven sin restriccion** (hotlink).

**Si Barter no me confirma esto:** Armo paginacion por las dudas, pero si son pocos speakers queda feo.

---

## FASE 4: Switch a produccion (medio dia)

**Que hacer:**
- [ ] Cambiar el `idevent` del demo (246) al ID real del WGIC 2026
- [ ] Cambiar el token si es diferente
- [ ] Correr un test rapido: entro a la pagina y veo que cargan datos reales
- [ ] Revisar que los filtros coincidan con las salas/tracks reales
- [ ] Revisar que las fotos de los speakers reales se vean bien

**Blockers en esta fase:**
- **CRITICO:** Necesito que Barter me confirme que los datos reales estan cargados. Si cambio el ID y no hay speakers ni sesiones cargadas, la pagina queda vacia.
- Necesito que el token del evento real funcione.

**Si Barter no tiene los datos cargados:** No puedo hacer el switch. Punto.

---

## FASE 5: Testing y ajustes (1-2 dias)

**Que hacer:**
- [ ] Revisar en mobile que todo se vea bien
- [ ] Probar los filtros con datos reales (a veces con 3 sesiones andan bien, con 200 no)
- [ ] Revisar que los horarios se muestren en formato correcto
- [ ] Revisar que los links a LinkedIn funcionen
- [ ] Revisar que las descripciones HTML no rompan el layout

**Blockers en esta fase:**
- Si los datos de Barter tienen inconsistencias (horarios raros, HTML roto, fotos faltantes), tengo que decidir si lo arreglo yo con codigo o se lo pido a ellos.

---

## Resumen: Que le tengo que pedir a Barter HOY

1. **ID del evento real WGIC 2026**
2. **Token funcional para ese evento**
3. **Fechas del congreso**
4. **Salas del CCIB**
5. **Cantidad estimada de speakers**
6. **Call de 15 min para ver un ejemplo de datos reales**
7. **Contacto tecnico directo**

---

## Resumen: Que puedo hacer yo YA (sin depender de Barter)

- PoC con evento demo 246
- Estructura de la pagina de agenda
- Estructura de la pagina de speakers
- Filtros genericos
- Responsive y diseno integrado al sitio

---

*Nota: Cuando Barter me pase el ID real y los datos, el switch deberia tardar medio dia. El trabajo pesado es el desarrollo frontend, que lo puedo hacer con el demo.*
