# Guía: dónde colocar los textos LOPD/RGPD en Helice

> WGIC 2026 — Registro gestionado por Helice (`panel.helice.app/w/wgic26/214760/registration`)

Este documento complementa los cambios realizados en la web (`landing-wgic26/`). Como Helice es la plataforma que **realmente recoge y trata los datos personales** de los inscritos, los textos legales deben estar configurados **dentro de Helice**, no solo en la web.

---

## 1. Texto corto (capa 1) en el formulario de registro de Helice

### Dónde iría
Al final del formulario de inscripción, **justo debajo del botón de envío/pago**, y justo encima o debajo de la casilla de aceptación obligatoria.

### Texto recomendado (español)

```
Información básica sobre protección de datos:
• Responsable: Društvo WGIN (Trata 31, 4220 Škofja Loka, Eslovenia).
• Encargado del Tratamiento: Universitat de Lleida (Pl. Víctor Siurana 1, 25003 Lleida, España).
• Finalidad: Gestión de la inscripción al congreso WGIC26, envío de comunicaciones informativas, novedades del evento y gestión de actividades asociadas.
• Legitimación: Consentimiento del interesado al suscribirse o registrarse.
• Destinatarios: No se cederán datos a terceros salvo obligación legal o necesidad estricta para la ejecución del evento.
• Derechos: Puede acceder, rectificar, limitar y suprimir sus datos, así como ejercer otros derechos dirigiéndose por escrito a las direcciones de las entidades responsables.
• Información adicional: Puede consultar la política de privacidad completa en https://www.wgic26.barcelona/privacy
```

### Configuración sugerida en Helice
- Usar un campo tipo **"Texto informativo / Disclaimer"** o **"HTML libre"** si lo permite Helice.
- El enlace a la política de privacidad debe ser clickeable y apuntar a: `https://www.wgic26.barcelona/privacy`
- Si Helice permite insertar HTML, utilizar una lista `<ul>` o viñetas para mejorar legibilidad.

---

## 2. Checkboxes de consentimiento en el formulario de registro de Helice

### Dónde irían
Justo encima del botón de envío/pago, **después** del resumen del pedido y **después** del texto corto legal.

### Checkbox 1 — Obligatoria

```
[ ] Acepto la Política de Privacidad para la gestión de mi inscripción al evento (Obligatoria para registrarse).
```

- Debe ser un campo de tipo **checkbox** configurado como **obligatorio / required**.
- El texto "Política de Privacidad" debe ser un enlace a: `https://www.wgic26.barcelona/privacy`
- **Bloquea el envío del formulario** si no está marcada.

### Checkbox 2 — Opcional (marketing)

```
[ ] Deseo recibir comunicaciones electrónicas, novedades, newsletters e información comercial relacionada con el congreso WGIC26 y futuras actividades de las entidades organizadoras (Opcional).
```

- Campo de tipo **checkbox** que debe estar **desmarcado por defecto**.
- Debe ser **opcional** (no bloquea el envío).
- El valor de este campo debe quedar guardado en el registro del usuario (para demostrar consentimiento explícito si es necesario).

### Configuración sugerida en Helice
1. Ir a la configuración del formulario de registro.
2. Agregar dos campos de tipo **Checkbox / Casilla de verificación**.
3. Configurar el primero como **requerido**.
4. Configurar el segundo como **no requerido** y con valor por defecto `false` / desmarcado.
5. En las etiquetas, permitir HTML para insertar el enlace a `/privacy`.
6. Asegurarse de que ambos valores se almacenen en la base de datos de inscritos.

---

## 3. Texto extenso (capa 2) — Política de Privacidad

### Dónde iría
No es necesario copiar el texto completo dentro de Helice. Lo correcto es:

- Mantener la política completa en la web: `https://www.wgic26.barcelona/privacy`
- Desde Helice, enlazar siempre a esa URL.

Si Helice exige una página de privacidad propia (algunas plataformas lo piden), se puede crear una página estática simple en Helice que contenga el **texto extenso completo** (punto 2 del documento original) y que también enlace a `https://www.wgic26.barcelona/privacy` como versión oficial.

### Texto extenso completo (para copiar si es necesario)

Ver `/privacy` en la web o el punto 2 del documento original:

```
POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS – WGIC26

En cumplimiento del Reglamento (UE) 2016/679 (RGPD), se informa a los usuarios y participantes del World Green Infrastructure Congress 2026 (WGIC26) sobre el tratamiento de sus datos personales:

1. ¿Quiénes son los responsables del tratamiento de sus datos?
   • Responsable Principal (Data Controller): Društvo WGIN, con domicilio en Trata 31, 4220 Škofja Loka, Eslovenia, y NIF SI84998911.
   • Encargado de la Gestión (Data Processor): UNIVERSITAT DE LLEIDA, con domicilio en Pl. Víctor Siurana 1, 25003 Lleida, España, y NIF Q7550001G.
   Ambos organismos actúan bajo un contrato de encargo de tratamiento de datos conforme al artículo 28 del RGPD.

2. ¿Con qué finalidad tratamos sus datos?
   • Gestionar la inscripción, asistencia, facturación y control de accesos al evento WGIC26.
   • Coordinar las agendas, ponencias (calls for papers/speakers) y actividades comerciales o de promoción del congreso.
   • Enviar newsletters y comunicaciones electrónicas relacionadas con el evento.

3. ¿Por cuánto tiempo conservaremos sus datos?
   Los datos personales proporcionados se conservarán mientras se mantenga la relación con el evento, durante los plazos legales para atender posibles responsabilidades y hasta que el interesado solicite su supresión.

4. ¿Cuál es la legitimación para el tratamiento?
   La base legal es el consentimiento del usuario al registrarse en el formulario, enviar un resumen (abstract) o suscribirse a nuestros boletines informativos.

5. ¿Cuáles son sus derechos?
   Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando sus datos personales. Los interesados pueden ejercer sus derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad enviando una comunicación por escrito a las direcciones postales de Društvo WGIN o de la Universitat de Lleida especificadas en el punto 1 o enviando un email a wgic2026.economics@udl.cat.
```

---

## 4. Newsletters publicadas como páginas web

Las newsletters de WGIC26 también tienen versión online en `https://www.wgic26.barcelona/newsletters/*`. Aunque no recogen datos directamente, sí contienen enlaces a la suscripción (`/#newsletter`) y al registro. Por eso, en cada versión online debe aparecer:

- Un **pie legal** con la información básica de protección de datos.
- Un enlace visible a `https://www.wgic26.barcelona/privacy`.
- Texto adaptado al idioma de la newsletter (es, en, it, fr, pt, el, ar).

Esto ya está implementado en `landing-wgic26/` mediante el componente `NewsletterFooter.tsx`.

### Texto modelo para el pie de newsletters web (español)

```
Información básica sobre protección de datos:
• Responsable: Društvo WGIN (Trata 31, 4220 Škofja Loka, Eslovenia).
• Encargado del Tratamiento: Universitat de Lleida (Pl. Víctor Siurana 1, 25003 Lleida, España).
• Finalidad: Gestión de la inscripción al congreso WGIC26, envío de comunicaciones informativas, novedades del evento y gestión de actividades asociadas.
• Legitimación: Consentimiento del interesado al suscribirse o registrarse.
• Destinatarios: No se cederán datos a terceros salvo obligación legal o necesidad estricta para la ejecución del evento.
• Derechos: Puede acceder, rectificar, limitar y suprimir sus datos, así como ejercer otros derechos dirigiéndose por escrito a las direcciones de las entidades responsables.
• Información adicional: Política de Privacidad completa en https://www.wgic26.barcelona/privacy
```

## 5. Otros lugares donde debería aparecer en Helice

### a) Emails de confirmación de inscripción
Añadir al pie del email de confirmación:

```
---
Información básica sobre protección de datos:
Responsable: Društvo WGIN | Encargado: Universitat de Lleida
Finalidad: Gestión de su inscripción a WGIC26.
Puede consultar nuestra política de privacidad completa en: https://www.wgic26.barcelona/privacy
```

### b) Facturas / comprobantes de pago
Incluir una nota breve:

```
Los datos personales se tratan conforme a la Política de Privacidad de WGIC26 disponible en https://www.wgic26.barcelona/privacy
```

### c) Página de login / área de usuario (si Helice la tiene)
Si los inscritos acceden a un área privada para modificar datos, incluir un enlace visible a la política de privacidad.

### d) Formularios adicionales en Helice
Si existen otros formularios (subida de abstracts, workshops, visitas técnicas, etc.), replicar el mismo patrón:
- Texto corto legal.
- Checkbox obligatorio de aceptación de política de privacidad.
- Checkbox opcional de comunicaciones comerciales.

---

## 5. Configuraciones técnicas recomendadas en Helice

| Configuración | Valor recomendado |
|---|---|
| Página de privacidad enlazada | `https://www.wgic26.barcelona/privacy` |
| Página de política de privacidad | `https://www.wgic26.barcelona/privacy` |
| Checkbox aceptación legal | **Requerido** |
| Checkbox marketing | **No requerido**, desmarcado por defecto |
| Almacenar timestamp del consentimiento | Sí, si Helice lo permite |
| Almacenar IP/version del formulario | Sí, si Helice lo permite (prueba de consentimiento) |
| Texto legal en emails automáticos | Sí |

---

## 6. Flujo ideal de registro (web + Helice)

1. Usuario llega a `/registration` en la web.
2. Lee el aviso legal y marca los checkboxes.
3. Hace clic en "Continuar al formulario de Helice".
4. En Helice, **vuelve a ver** el texto corto legal y los checkboxes de consentimiento.
5. Solo puede completar el pago si marca la casilla obligatoria.
6. Recibe email de confirmación con el enlace a la política de privacidad.

> **Importante:** Aunque la web tenga los checkboxes como aviso previo, **Helice debe volver a pedir el consentimiento** porque es el sistema que procesa los datos. Esto refuerza la validez legal del consentimiento.

---

## 7. Contactos para dudas legales

- **Responsable:** Društvo WGIN — Trata 31, 4220 Škofja Loka, Eslovenia
- **Encargado:** Universitat de Lleida — Pl. Víctor Siurana 1, 25003 Lleida, España
- **Email para ejercer derechos:** `wgic2026.economics@udl.cat`

---

## 8. Checklist antes de publicar

- [ ] Texto corto añadido en el formulario de registro de Helice.
- [ ] Enlace a `/privacy` funciona y es clickeable.
- [ ] Checkbox obligatorio configurado como requerido.
- [ ] Checkbox opcional de marketing desmarcado por defecto.
- [ ] Valores de los checkboxes se guardan en el registro.
- [ ] Email de confirmación incluye aviso legal y enlace a `/privacy`.
- [ ] Facturas/comprobantes incluyen enlace a `/privacy`.
- [ ] Texto extenso publicado y accesible en `https://www.wgic26.barcelona/privacy`.
- [ ] Pies legales añadidos a las versiones web de todas las newsletters.
- [ ] Los emails de newsletter incluyen enlace a política de privacidad y opción de baja.
