# Plan de Integración API Barter — WGIC 2026

**Fecha:** 2026-06-03  
**Proyecto:** World Green Infrastructure Congress 2026 (WGIC 2026)  
**Sistema externo:** Barter (programapi)  
**Método de integración:** API REST (JSON)

---

## 1. Objetivo

Publicar la **agenda del programa** y el **listado de speakers** del WGIC 2026 en el sitio web oficial, consumiendo datos en tiempo real desde la plataforma Barter mediante su API.

El resultado será una experiencia visual integrada al diseño de la web (no un iframe), con navegación por día, filtros por sala/track/tipo de sesión, y perfiles de speakers completos.

---

## 2. Alcance

### Incluido
- Página de agenda (`/program/agenda`) con grilla de sesiones, filtros y vista de detalle.
- Página de speakers (`/program/speakers`) con grilla, filtros y vista de detalle.
- Consumo de datos desde la API de Barter en tiempo real.
- Diseño responsive integrado con la identidad visual del sitio WGIC 2026.
- Manejo de contenido HTML proveniente de las descripciones de sesiones.

### No incluido
- Panel de administración de contenido (la gestión de datos se hace desde la plataforma Barter).
- Funcionalidades de networking, chat o citas entre asistentes.
- Gestión de inscripciones o pagos (se mantienen en los sistemas actuales).

---

## 3. Responsabilidades

### 3.1 Barter (Proveedor de datos y API)

Barter es responsable de proporcionar la infraestructura de datos y asegurar que la información del evento esté completa y disponible a través de la API.

| ID | Responsabilidad | Descripción | Entregable |
|---|---|---|---|
| B1 | **ID de evento real** | Proporcionar el identificador numérico del evento WGIC 2026 en la plataforma Barter (distinto al evento demo 246). | `idevent` definitivo |
| B2 | **Credenciales de acceso** | Entregar el token (y API key si aplica) funcional para el evento real. | Token válido para producción |
| B3 | **Carga de speakers** | Subir a la plataforma todos los speakers confirmados del WGIC 2026 con: nombre, apellido, foto, empresa, cargo, ciudad, país, biografía y LinkedIn. | Datos completos en `speakers.php` |
| B4 | **Carga de sesiones** | Crear todas las sesiones/ponencias del programa con: título, descripción, fecha, hora inicio/fin, sala, track, tipo de sesión y speakers asignados. | Datos completos en `sessions.php` |
| B5 | **Configuración de entidades** | Definir y configurar: salas del CCIB, tracks temáticos, tipos de sesión y targets/público objetivo. | Entidades configuradas en `event.php` |
| B6 | **Disponibilidad de imágenes** | Asegurar que las URLs de fotos de speakers (`urlphoto`) sean accesibles públicamente sin restricciones de hotlink ni CORS. | Imágenes visibles desde el dominio de WGIC |
| B7 | **Formato de descripciones** | Definir si las descripciones de sesiones se cargarán en texto plano o HTML, y mantener consistencia. | Criterio definido y aplicado |
| B8 | **Revisión conjunta** | Participar en una sesión de validación antes del lanzamiento para detectar errores en los datos o en la integración. | Sesión de 30-60 min programada |
| B9 | **Soporte técnico** | Estar disponibles para resolver dudas sobre la API, cambios en la estructura de datos o problemas de autenticación durante el desarrollo. | Canal de comunicación activo |

### 3.2 Equipo WGIC (Desarrollo web)

El equipo de WGIC es responsable del desarrollo frontend, la integración técnica con la API y la publicación final en el sitio web.

| ID | Responsabilidad | Descripción | Entregable |
|---|---|---|---|
| W1 | **Prueba de concepto (PoC)** | Desarrollar una versión de prueba funcional usando el evento demo (246) para validar la conectividad y estructura de datos. | Ruta `/program/agenda-test` funcional |
| W2 | **Página de agenda** | Diseñar y desarrollar la grilla de sesiones con: navegación por día, filtros dinámicos (sala, track, tipo), horarios y vista de detalle de sesión. | Página `/program/agenda` publicada |
| W3 | **Página de speakers** | Diseñar y desarrollar el listado de speakers con: grilla responsive, filtros, tarjeta de perfil y vista de detalle con las sesiones en las que participa. | Página `/program/speakers` publicada |
| W4 | **Integración visual** | Aplicar los colores, tipografías y estilos del sitio WGIC 2026 para que la agenda y los speakers se vean como parte orgánica del sitio. | Diseño alineado con la marca |
| W5 | **Manejo de HTML** | Implementar un renderizado seguro de las descripciones de sesiones que vienen en formato HTML desde la API. | Contenido visualizado correctamente |
| W6 | **Responsive y accesibilidad** | Asegurar que ambas páginas funcionen correctamente en mobile, tablet y desktop, cumpliendo estándares básicos de accesibilidad. | Testing multi-dispositivo |
| W7 | **Switch a producción** | Cambiar el `idevent` y las credenciales del demo al evento real una vez que Barter entregue los datos definitivos. | Configuración de producción |
| W8 | **Testing final** | Realizar pruebas de integración completas con los datos reales, validar filtros, enlaces de LinkedIn, fotos y horarios. | Checklist de testing aprobado |
| W9 | **Documentación técnica interna** | Dejar documentado el funcionamiento de la integración para futuros mantenimientos o cambios de contenido. | README interno del equipo |

---

## 4. Flujo de trabajo y timeline

### Fase 1: Preparación (Semana 1, días 1-2)

```
Barter  → Confirma ID del evento real y credenciales de producción
WGIC    → Arma la PoC con el evento demo (246) y valida la estructura
```

### Fase 2: Desarrollo en paralelo (Semana 1-2, días 3-10)

```
Barter  → Carga speakers, sesiones, salas y tracks del WGIC 2026
WGIC    → Desarrolla agenda, speakers, filtros y vistas de detalle
```

### Fase 3: Integración y testing (Semana 2, días 11-14)

```
WGIC    → Switch a evento real, testing completo, ajustes responsive
Barter  → Revisión conjunta de datos y validación final
```

### Fase 4: Publicación (Semana 2, día 14)

```
WGIC    → Despliegue a producción
Barter  → Verificación final desde su lado
```

**Tiempo de desarrollo puro (WGIC):** 8-10 días hábiles  
**Tiempo total del proyecto:** ~2 semanas (trabajo en paralelo)

---

## 5. Dependencias críticas

1. **Los datos de Barter son el cuello de botella.** Si Barter no tiene cargados los speakers y sesiones reales, WGIC puede desarrollar todo el frontend con el demo pero no puede publicar.
2. **El cambio de `idevent` es el punto de no retorno.** Hasta que Barter no confirme el ID real y los datos cargados, no se puede hacer el switch a producción.
3. **Las imágenes deben ser públicas.** Si Barter restringe las URLs de fotos, los perfiles de speakers se verán rotos.

---

## 6. Entregables finales esperados

### Por parte de Barter
- Evento WGIC 2026 configurado en la plataforma con todos los datos.
- Token de acceso funcional y documentación compartida.
- Validación conjunta exitosa.

### Por parte de WGIC
- Página `/program/agenda` funcional y publicada.
- Página `/program/speakers` funcional y publicada.
- Código documentado y desplegado en producción.

---

## 7. Contactos y canales

| Rol | Responsabilidad |
|---|---|
| Barter (Anna / Project Manager) | Carga de datos, credenciales, validación |
| WGIC (Federico / Desarrollo) | Integración técnica, diseño frontend, deploy |

---

*Documento sujeto a ajustes según evolución del proyecto.*
