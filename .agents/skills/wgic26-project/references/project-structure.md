# Estructura del Proyecto WGIC 26

## Tabla de Contenidos
1. [App Router](#app-router)
2. [Componentes](#componentes)
3. [Lib y Data](#lib-y-data)
4. [APIs](#apis)
5. [Content](#content)
6. [Configuración](#configuración)

## App Router

### Rutas estáticas principales
- `/` — Home
- `/about/congress` — About Congress
- `/about/congress-committee` — Congress Committee
- `/about/organisation-committee` — Organisation Committee
- `/about/wgi-network` — WGI Network
- `/about/univeristy-of-lleida` — University of Lleida (typo conocido)
- `/about/locations` — Locations
- `/about/venue` — Venue
- `/exhibitors` — Exhibitors/Sponsors
- `/key-note-speakers` — Keynote Speakers
- `/plan-your-stay` — Plan Your Stay
- `/registration` — Registration
- `/speakers` — Call for Speakers
- `/travel` — Travel info

### Program
- `/program/program` — Programa general
- `/program/topics` — Topics
- `/program/workshops` — Workshops
- `/program/technical-visits` — Technical Visits
- `/program/side-events` — Side Events

### Blog
- `/blog` — Listado de posts
- `/blog/[slug]` — Post individual (dinámico, SSG)

### Newsletters
Patrón: `/newsletters/[periodo]-newsletter[N]-[lang]/`

Ejemplos:
- `/newsletters/february2026-en`, `-es`, `-it`, `-el`
- `/newsletters/march2026-newsletter2-en`, `-es`, `-it`, `-el`
- `/newsletters/april2026-newsletter3-en`, `-es`, `-it`, `-fr`, `-pt`, `-ar`
- `/newsletters/may2026-newsletter4-en`, `-es`, `-it`, `-fr`, `-pt`, `-ar`

Listado: `/newsletters` — client component con array hardcodeado.

## Componentes

### UI (shadcn/ui)
- `accordion.tsx`
- `button.tsx` — variantes custom: default, secondary, inverse, blue, yellow, purple, red, disabled
- `navigation-menu.tsx`
- `sheet.tsx`
- `table.tsx`
- `tabs.tsx`

### Proyecto
- `Navigation.tsx` — Scroll-aware navbar, desktop dropdowns, mobile Sheet+Accordion
- `Footer.tsx`
- `PageHeader.tsx` — Props: title, description, section
- `TextImage.tsx` — Props: title, description, image, imagePosition ("left"|"right")
- `LanguageSwitcher.tsx` — Toggle EN|ES, cambia cookie
- `AnimatedLogo.tsx`
- `Carousel.tsx`
- `Countdown.tsx`

## Lib y Data

### `lib/blog.ts`
- `getPostSlugs()`
- `getPostBySlug(slug)` — retorna frontmatter + content + readingTime
- `getAllPosts()` — ordenados por fecha descendente
- `getRelatedPosts(slug, category)`
- `getAuthor(authorSlug)` — lee `src/data/authors.json`

### `lib/newsletter-metrics.ts`
- `recordNewsletterSubscription(email)` — guarda en Redis
- `getNewsletterStats()` — estadísticas acumuladas

### `lib/utils.ts`
- `cn(...inputs)` — clsx + tailwind-merge

### Data files
- `src/data/authors.json` — Autores del blog
- `src/data/program-en.json` — Datos del programa (EN)
- `src/data/program-es.json` — Datos del programa (ES)

## APIs

| Ruta | Método | Descripción |
|------|--------|-------------|
| `/api/exhibitor-pack` | POST | Notifica descarga de info pack |
| `/api/interest-form` | POST | Formulario de interés en patrocinio |
| `/api/newsletter` | POST | Suscripción al newsletter |
| `/api/newsletter/stats` | GET | Stats de suscripción (requiere auth) |
| `/api/newsletter/weekly-report` | GET/POST | Envía reporte semanal por email |
| `/api/newsletter/backfill` | POST | Backfill desde IMAP a Redis |
| `/api/test-email` | GET/POST | Test de conectividad IMAP/SMTP |
| `/api/weekly-registrations-report` | GET | Cuenta emails "Registered account" en IMAP |

## Content

- `content/blog/*.md` — Posts del blog con frontmatter
- `public/img/` — Imágenes locales
- `public/pdf/` — PDFs de newsletters
- `public/video/` — Videos

## Configuración

### next.config.ts
- Plugin `next-intl` con `./src/i18n/request.ts`
- `images.unoptimized: true`
- `remotePatterns`: Supabase, Elsevier, Squarespace, LinkedIn
- Headers de seguridad: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy

### i18n config
- `src/i18n/config.ts`: locales `["en", "es"]`, default `"en"`
- `middleware.ts`: detecta accept-language, setea cookie
