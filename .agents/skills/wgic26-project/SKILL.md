---
name: wgic26-project
description: WGIC 26 landing page project — Next.js 15 App Router, React 19, Tailwind v4, next-intl, shadcn/ui. Use when working on any code, content, styling, or configuration for the WGIC 26 (World Geospatial Information Congress 2026) website at landing-wgic26/. Use for adding pages, components, blog posts, newsletters, API routes, styling changes, i18n text updates, or any project maintenance.
---

# WGIC 26 Project

Landing page institucional para el World Geospatial Information Congress 2026.

## Stack

- **Framework:** Next.js 15.3.6 (App Router)
- **React:** 19.1.0
- **Styling:** Tailwind CSS v4 + `@tailwindcss/postcss` + `tw-animate-css`
- **UI:** shadcn/ui (estilo "new-york", RSC enabled)
- **i18n:** `next-intl` 3.26.5 (SIN routing i18n — idioma por cookie)
- **Icons:** `lucide-react`
- **Blog:** Markdown + `gray-matter` + `remark` + `remark-html`
- **Email:** `nodemailer` + `imapflow` (Zoho principal)
- **Metrics:** `@upstash/redis`

## Arquitectura i18n (CRÍTICO)

**NO hay routing i18n.** Las URLs no llevan prefijo de idioma. El idioma se determina por cookie `NEXT_LOCALE`.

- `middleware.ts`: detecta `accept-language`, setea cookie `NEXT_LOCALE` (1 año). NO reescribe rutas.
- `src/i18n/request.ts`: lee cookie en server, carga `messages/{locale}.json`.
- Server components: `await getTranslations("namespace")`
- Client components: `const t = useTranslations("namespace")`
- `LanguageSwitcher.tsx`: cambia cookie + `router.refresh()`
- **Excepción:** newsletters tienen rutas estáticas separadas por idioma (`/newsletters/february2026-es`), pero NO son parte del sistema next-intl.

## Estructura de Carpetas

```
landing-wgic26/
src/
  app/              # App Router — cada página define su metadata
    about/          # Páginas estáticas de About
    api/            # Route handlers
    blog/           # Blog index + [slug] dinámico
    exhibitors/     # Página de expositores/sponsors
    newsletters/    # Páginas estáticas por idioma
    program/        # Subpáginas del programa
    ...
  components/
    ui/             # shadcn/ui components
    Navigation.tsx
    Footer.tsx
    PageHeader.tsx
    TextImage.tsx
    ...
  lib/
    blog.ts         # Helpers MD parser
    utils.ts        # cn() helper
    newsletter-metrics.ts
  messages/
    en.json         # ~650 líneas
    es.json         # ~660 líneas
  data/
    authors.json
    program-en.json
    program-es.json
content/
  blog/             # Posts .md
public/
  img/              # Imágenes locales
  pdf/              # PDFs newsletters
```

Para estructura completa y detalles de routing, ver `references/project-structure.md`.

## Patrones de Código

### Server vs Client Components
- **Páginas internas** (about, program, etc.) → Server Components con `await getTranslations()`
- **Interactivos** → `"use client"` (Navigation, LanguageSwitcher, formularios, home)
- **RootLayout** → async server, provee `<NextIntlClientProvider>`

### shadcn/ui + Estilos
- Componentes en `components/ui/` (Button, Accordion, Sheet, Tabs, Table, NavigationMenu)
- `lib/utils.ts`: `cn()` con `clsx` + `tailwind-merge`
- Botones custom con efecto 3D (pseudo-elementos con `skew` en hover/active)
- Headings siempre `uppercase font-normal`
- Fondos oscuros predominantes (`bg-monstera`, `bg-cactus`)

Para paleta de colores completa y estilos, ver `references/colors-and-styling.md`.

### Páginas
- Cada página define su propio `metadata` (o `generateMetadata` para dinámicas)
- `PageHeader` estándar para páginas internas: `<PageHeader title={t("title")} description={t("description")} section="about" />`
- `TextImage` para layouts zig-zag: `imagePosition={"left" | "right"}`

### APIs
- Validación manual con regex básicos
- Múltiples providers SMTP (Zoho en 465 SSL, Gmail)
- Auth por `Authorization: Bearer <token>` o `?token=` query param
- Secrets: `CRON_SECRET`, `NEWSLETTER_STATS_SECRET`, `TEST_EMAIL_TOKEN`, `NEWSLETTER_BACKFILL_SECRET`

## Convenciones Importantes

1. **Idioma por cookie, NO por URL.** Nunca crear rutas tipo `/es/about`.
2. **Contenido estático hardcodeado.** La mayoría del texto vive en `messages/*.json`. Blog es la única excepción dinámica.
3. **Newsletters:** páginas estáticas individuales, NO usan el sistema de blog. El listado en `/newsletters` tiene un array hardcodeado.
4. **Imágenes:** `images.unoptimized: true` en next.config. Mezcla de locales (`/public/img/`) y externas (Supabase, Squarespace, LinkedIn).
5. **Typo conocido:** ruta `univeristy-of-lleida` (no corregir a menos que se pida explícitamente).
6. **Colores OKLCH** en CSS variables + `@theme` en Tailwind v4.
7. **Paths alias:** `@/*` → `./src/*`

## Flujos Comunes

### Agregar una página nueva
1. Crear carpeta en `src/app/[ruta]/page.tsx`
2. Definir `metadata` (o `generateMetadata`)
3. Usar `PageHeader` + contenido. Server component con `getTranslations` si necesita i18n.
4. Agregar link en `Navigation.tsx` si aplica.
5. Agregar textos en `messages/en.json` y `messages/es.json`.

### Agregar un post de blog
1. Crear `content/blog/[slug].md` con frontmatter (`title`, `date`, `excerpt`, `coverImage`, `author`, `category`, `tags`, `featured`)
2. Agregar autor en `src/data/authors.json` si es nuevo
3. `generateStaticParams` en `blog/[slug]/page.tsx` ya lo detecta automáticamente

### Agregar una newsletter
1. Crear página estática en `src/app/newsletters/[nombre]-[lang]/page.tsx`
2. Agregar al array hardcodeado en `src/app/newsletters/page.tsx`
3. Subir PDF a `public/pdf/` si aplica

## Variables de Entorno Clave

```
# Email (Zoho principal)
ZOHO_USER, ZOHO_PASS, SMTP_HOST, SMTP_PORT, SMTP_SECURE
GMAIL_USER, GMAIL_PASS
RECIPIENT_EMAIL

# Redis (Upstash)
UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN

# IMAP
IMAP_HOST, IMAP_PORT, IMAP_USER, IMAP_PASS

# Secrets
CRON_SECRET, NEWSLETTER_STATS_SECRET, TEST_EMAIL_TOKEN, NEWSLETTER_BACKFILL_SECRET
```
