# Guía: dónde colocar los textos LOPD/RGPD en Helice

> WGIC 2026 — Registro gestionado por Helice (`panel.helice.app/w/wgic26/214760/registration`)

Este documento complementa los cambios realizados en la web (`landing-wgic26/`). Como Helice es la plataforma que **realmente recoge y trata los datos personales** de los inscritos, los textos legales deben estar configurados **dentro de Helice**, no solo en la web.

---

## 1. Texto corto (capa 1) en el formulario de registro de Helice

### Dónde iría
Al final del formulario de inscripción, **justo debajo del botón de envío/pago**, y justo encima o debajo de la casilla de aceptación obligatoria.

### Texto recomendado (español) — cláusula básica oficial (Fundació UdL)

```
Los datos recogidos serán incorporados y tratados en la actividad de tratamiento "Organización de
Congresos-UdL", de la cual es responsable Društvo WGIN (Trata 31, 4220 Škofja Loka, Eslovenia),
actuando como encargada del tratamiento la Universitat de Lleida (Pl. Víctor Siurana 1, 25003 Lleida,
España), ante quien podrá ejercer sus derechos. La finalidad del tratamiento es la gestión de su
participación integral en el congreso. El tratamiento queda legitimado por su consentimiento, en
virtud del art. 6.1.a del RGPD. Los datos no se comunicarán a terceros, salvo en los supuestos
previstos en el ordenamiento jurídico. Tiene derecho a acceder a los datos, rectificarlos, suprimirlos,
solicitar su portabilidad, oponerse al tratamiento y solicitar su limitación. Correo electrónico de
contacto del Delegado de Protección de Datos: dpd@udl.cat. INFORMACIÓN DETALLADA en el siguiente enlace.
```

> Este es el texto exacto que ya está publicado en `https://www.wgic26.barcelona/registration` (encima de los checkboxes) y en `/privacy`. Usalo tal cual en Helice para que sea consistente en los dos sitios.

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
INFORMACIÓN DETALLADA SOBRE PROTECCIÓN DE DATOS DE CARÁCTER PERSONAL – WGIC26

Tratamiento: Organización de Congresos-UdL

1. Responsable y otros intervinientes en el tratamiento
   • Responsable: Društvo WGIN, Trata 31, 4220 Škofja Loka, Eslovenia, NIF SI84998911. jure.sumi@wgin.org
   • Encargado del tratamiento: Universitat de Lleida (UdL), Pl. Víctor Siurana 1, 25003 Lleida, España. dpd@udl.cat
     (encargo de tratamiento formalizado el 30 de abril de 2026, art. 28.3 RGPD)
   • Subencargado — registros web del congreso: UTE World Green Conference, Carrer Mallorca 346, 4t 1a,
     08013 Barcelona (España). info@wgic2026.org
   • Subencargado — visitas técnicas y talleres (incluida la inscripción a estas actividades): Fundació UdL,
     Carrer Pere de Cabrera 5, 25001 Lleida (España). fundacio@udl.cat

2. Finalidad del tratamiento
   Gestión de su participación en el WGIC26: inscripciones, visitas técnicas, emisión de certificados o
   justificantes, envío de un resumen (abstract), etc. Específicamente: gestión de clientes/contabilidad/
   fiscalidad/administración, publicidad y prospección comercial, certificación electrónica, actividades
   asociativas/culturales/recreativas/deportivas/sociales, educación, videovigilancia, prevención de
   riesgos laborales, cumplimiento de obligaciones monetarias, comunicaciones electrónicas, seguridad y
   control de acceso a edificios.

3. Destinatarios
   No se comunicarán datos a terceros, sin perjuicio de lo que establezca el ordenamiento jurídico.

4. Legitimación
   El consentimiento del interesado o de sus representantes legales (art. 6.1.a RGPD).

5. Plazo de conservación
   Los datos se conservarán en tanto que subsista su valor probatorio (art. 55 de la Ley 16/1985, de 25 de
   junio, del Patrimonio Histórico Español).

6. Derechos
   Puede acceder a sus datos, rectificarlos o suprimirlos, solicitar su portabilidad, oponerse al
   tratamiento, solicitar su limitación o retirar el consentimiento, enviando una instancia genérica a la
   Universitat de Lleida (Secretaría General) o presencialmente en el Registro General de la UdL, Pl. de
   Víctor Siurana 1, 25003 Lleida. También puede contactar al Delegado de Protección de Datos: dpd@udl.cat.
   Si considera que sus derechos no se han atendido adecuadamente, puede reclamar ante la Autoridad
   Catalana de Protección de Datos.
```

> Este texto es el que ya está desglosado en la web (`/privacy`), sección por sección. Si Helice te permite pegar un bloque único, usá este; si te pide campos separados, mapealo a las secciones 1 a 6.

---

## 4. Newsletters publicadas como páginas web

Las newsletters de WGIC26 también tienen versión online en `https://www.wgic26.barcelona/newsletters/*`. Aunque no recogen datos directamente, sí contienen enlaces a la suscripción (`/#newsletter`) y al registro. Por eso, en cada versión online debe aparecer:

- Un **pie legal** con la información básica de protección de datos.
- Un enlace visible a `https://www.wgic26.barcelona/privacy`.
- Texto adaptado al idioma de la newsletter (es, en, it, fr, pt, el, ar).

> ⚠️ Nota: este componente `NewsletterFooter.tsx` **no existe todavía** en `landing-wgic26/` — queda pendiente de implementar en el sitio, no está hecho.

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

### d) Formulario de subida de papers/abstracts (prioridad, igual que el de inscripción)
Ese formulario también recoge datos personales (nombre, email, afiliación de los autores) y el propio
documento de la Fundació UdL menciona explícitamente "enviar un resumen (abstract)" como parte de la
misma actividad de tratamiento. Hay que replicar el mismo patrón que en el registro:
- Texto corto legal (cláusula básica, punto 1 de esta guía).
- Checkbox obligatorio de aceptación de política de privacidad.
- Checkbox opcional de comunicaciones comerciales.

### e) Otros formularios adicionales en Helice
Si existen más formularios (workshops, visitas técnicas, etc.), replicar el mismo patrón que en d).

---

## 6. Configuraciones técnicas recomendadas en Helice

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

## 7. Flujo ideal de registro (web + Helice)

1. Usuario llega a `/registration` en la web.
2. Lee el aviso legal y marca los checkboxes.
3. Hace clic en "Continuar al formulario de Helice".
4. En Helice, **vuelve a ver** el texto corto legal y los checkboxes de consentimiento.
5. Solo puede completar el pago si marca la casilla obligatoria.
6. Recibe email de confirmación con el enlace a la política de privacidad.

> **Importante:** Aunque la web tenga los checkboxes como aviso previo, **Helice debe volver a pedir el consentimiento** porque es el sistema que procesa los datos. Esto refuerza la validez legal del consentimiento.

---

## 8. Contactos para dudas legales

- **Responsable:** Društvo WGIN — Trata 31, 4220 Škofja Loka, Eslovenia — jure.sumi@wgin.org
- **Encargado / Delegado de Protección de Datos:** Universitat de Lleida — Pl. Víctor Siurana 1, 25003 Lleida, España — dpd@udl.cat
- **Subencargado (registros web):** UTE World Green Conference — info@wgic2026.org
- **Subencargado (visitas técnicas y talleres):** Fundació UdL — fundacio@udl.cat

---

## 9. Checklist antes de publicar

- [x] Texto corto (cláusula básica oficial) y checkboxes ya publicados en `/registration` de la web.
- [x] Texto detallado (con subencargados, finalidades, plazo de conservación y derecho a reclamar ante la APDCAT) ya publicado en `/privacy` de la web.
- [ ] Texto corto añadido en el formulario de registro de Helice.
- [ ] Texto corto y checkboxes añadidos también en el formulario de subida de papers/abstracts de Helice.
- [ ] Enlace a `/privacy` funciona y es clickeable.
- [ ] Checkbox obligatorio configurado como requerido.
- [ ] Checkbox opcional de marketing desmarcado por defecto.
- [ ] Valores de los checkboxes se guardan en el registro.
- [ ] Email de confirmación incluye aviso legal y enlace a `/privacy`.
- [ ] Facturas/comprobantes incluyen enlace a `/privacy`.
- [ ] Pies legales añadidos a las versiones web de todas las newsletters (pendiente de implementar `NewsletterFooter.tsx` en la web).
- [ ] Los emails de newsletter incluyen enlace a política de privacidad y opción de baja.
