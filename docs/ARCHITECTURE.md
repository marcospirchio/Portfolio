# Arquitectura Técnica — Portfolio Marcos Pirchio Giani (v2)

Sitio 100% estático/SSG, sin backend propio (ver PRD §8-9: contacto por `mailto:`, sin integraciones server-side). Por eso esta arquitectura omite las secciones de API REST, entidades de base de datos y autenticación del template estándar — no aplican a este proyecto.

## Stack tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | Next.js (App Router) | 15.x |
| Lenguaje | TypeScript | 5.x |
| Estilos | Tailwind CSS | 4.x |
| Animación | Motion (ex Framer Motion) | 11.x |
| Iconos | lucide-react | última |
| Tipografía | `next/font/google` — Fraunces (headlines) + Inter (body) | — |
| Hosting sugerido | Vercel | — |
| Analytics | `@vercel/analytics` (si se despliega en Vercel) | última |

No se agrega ninguna librería de 3D/WebGL (Three.js, R3F) ni de i18n (`next-intl`, etc.) — descartadas explícitamente por el PRD para mantener el bundle liviano y el mantenimiento simple.

## Estructura de carpetas

```
portfolio1/
├── app/
│   ├── layout.tsx              ← fonts, metadata, LanguageProvider, ThemeProvider
│   ├── page.tsx                ← compone las secciones en orden
│   └── globals.css             ← Tailwind + variables CSS de paleta/tema
├── components/
│   ├── layout/
│   │   ├── Header.tsx          ← nav sticky + logo "MP" + toggle idioma (+ toggle tema si se implementa)
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx        ← itera project-data.ts y renderiza ProjectCard
│   │   ├── ProjectCard.tsx
│   │   ├── About.tsx
│   │   ├── CapabilityGrid.tsx  ← las 6 tarjetas de capacidades dentro de About
│   │   ├── TechStack.tsx
│   │   ├── Services.tsx
│   │   ├── Languages.tsx
│   │   ├── Certifications.tsx
│   │   └── Contact.tsx
│   ├── graphics/
│   │   └── HeroGraphic.tsx     ← composición de tarjetas CSS que reemplaza al "blob 3D" (ver decisión más abajo)
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── Card.tsx
│       └── SectionHeading.tsx  ← eyebrow + título, reutilizado en cada sección
├── lib/
│   ├── i18n/
│   │   ├── translations.ts     ← copy estático de UI (nav, botones, headings) en { es, en }
│   │   └── LanguageProvider.tsx← context + hook useLanguage()
│   ├── theme/
│   │   └── ThemeProvider.tsx   ← (post-MVP) context + hook useTheme(), clase en <html>
│   └── content/
│       ├── projects.ts         ← datos tipados de los 6 proyectos (bilingües)
│       ├── services.ts
│       ├── languages.ts
│       ├── certifications.ts
│       └── techStack.ts
├── types/
│   └── content.ts               ← Project, Bilingual<T>, Service, LanguageSkill, Certification
├── public/
│   ├── images/                  ← fotos de perfil y proyectos migradas del portfolio viejo
│   ├── certificaciones/         ← 3 PDFs migrados
│   └── video/                   ← demo_securehire.mp4
├── next.config.ts
├── tailwind.config.ts           ← si Tailwind v4 lo requiere; si no, todo vía @theme en globals.css
├── tsconfig.json
└── package.json
```

## Modelo de datos (contenido, no base de datos)

No hay base de datos: el "modelo de datos" es la forma tipada del contenido estático en `types/content.ts` y `lib/content/*.ts`.

### Tipo `Bilingual<T>`
```ts
type Bilingual<T = string> = { es: T; en: T }
```
Se usa para todo campo que requiera traducción (descripciones, categorías, textos largos). Los campos que son nombres propios o términos técnicos (título del proyecto, nombres de tecnologías) **no** se tipan como `Bilingual` — se muestran igual en ambos idiomas.

### `Project`
| Campo | Tipo | Restricciones | Descripción |
|-------|------|---------------|-------------|
| id | string | único, slug | ej. `"autoturnos"` |
| order | number | único | controla el orden en el grid; AutoTurnos = 1 |
| title | string | — | nombre del proyecto |
| category | `Bilingual` | — | eyebrow del card, ej. "Plataforma SaaS" / "SaaS Platform" |
| description | `Bilingual` | — | descripción corta para el card |
| tech | string[] | — | tags de stack |
| image | string \| null | ruta en `public/images` | `null` → se renderiza `ProjectImagePlaceholder` |
| links | `{ demo?: string; github?: string; video?: string }` | al menos una definida | botones condicionales — el componente solo renderiza los que existen |
| featured | boolean | — | true solo para AutoTurnos, controla estilo destacado del card #1 |

### `Certification`
| Campo | Tipo | Descripción |
|-------|------|-------------|
| title | `Bilingual` | — |
| description | `Bilingual` | — |
| institution | string | — |
| certificateUrl | string | ruta local o externa |

### `LanguageSkill`
| Campo | Tipo | Descripción |
|-------|------|-------------|
| name | string | Español / Inglés / Portugués (o su traducción EN) — en rigor se resuelve con `Bilingual` para el nombre también, ya que "Español" cambia a "Spanish" |
| level | `Bilingual` | "Avanzado" / "Advanced" |
| flag | string | emoji |
| description | `Bilingual` | — |
| certifications | `{ name: string; url: string }[]` | — |

### `Service`
| Campo | Tipo | Descripción |
|-------|------|-------------|
| icon | `LucideIcon` | referencia al componente de ícono |
| title | `Bilingual` | — |
| description | `Bilingual` | — |

## Sistema de i18n (decisión técnica clave)

- **Decisión:** Context de React (`LanguageProvider`) con `useState<'es' | 'en'>('es')`, expuesto vía hook `useLanguage()` que devuelve `{ language, setLanguage, t }`. `t` es una función `(key: string) => string` que resuelve contra `translations.ts`. Para contenido estructurado (proyectos, certificaciones, etc.) los componentes acceden directo a `campo[language]` en vez de pasar por `t()`.
- **Por qué:** el PRD pide explícitamente "nada de rutas separadas, nada de librería de traducción, nada de detección automática" — un context + objeto plano cumple exactamente eso con cero dependencias nuevas.
- **Persistencia:** se guarda la preferencia en `localStorage` (`portfolio-lang`) para que no se resetee al navegar dentro de la sesión — es una sola página, así que esto es principalmente para revisitas. No es SSR-crítico: el valor inicial es `"es"` en servidor y se hidrata desde `localStorage` en un `useEffect`, aceptando un flash mínimo la primera carga.
- **Alternativas descartadas:** `next-intl` / rutas `/en` (excede lo pedido, agrega complejidad de routing innecesaria para una landing de una sola página).

## Dark mode (post-MVP, no bloqueante)

- **Decisión (si se implementa):** `ThemeProvider` propio (no `next-themes`, para no sumar una dependencia a un nice-to-have) que aplica la clase `dark` en `<html>` y persiste en `localStorage`. Paleta ya se define con variables CSS (`--bg`, `--fg`, `--accent`, etc.) para que el toggle sea solo cambiar la clase.
- **Por qué no `next-themes`:** es una dependencia entera para un toggle simple que se resuelve en ~20 líneas con `useEffect` + `localStorage` + clase CSS.

## Dirección visual — decisiones de diseño

### Paleta de colores
Se descarta el azul (protagonista en la imagen de referencia) y el neón azul/púrpura/naranja del portfolio viejo, para que el resultado no se perciba como clon de ninguno de los dos.

| Token | Light | Dark | Uso |
|-------|-------|------|-----|
| `--bg` | `#FAF8F5` (hueso cálido) | `#121110` (ink cálido, no negro puro) | fondo base |
| `--fg` | `#1A1714` | `#F5F1EC` | texto principal |
| `--muted` | `#6B6459` | `#A8A196` | texto secundario |
| `--accent` (Ember) | `#C4632E` | `#E08248` | CTAs, links, highlight del headline, tags activos |
| `--accent-soft` | `#C4632E1A` (10% opacidad) | `#E082481A` | fondos de badges/tags |
| `--surface` | `#FFFFFF` | `#1B1917` | cards |
| `--border` | `#E8E3DB` | `#2A2723` | bordes de cards |
| `--success` | `#4C7A5B` | `#6FA37E` | badge "Disponible para trabajar" |

- **Por qué "Ember" (terracota/ámbar) como acento único:** da calidez y distintivo frente al azul genérico de portfolios "tipo SaaS", combina bien con la paleta hueso/ink cálida (no gris frío), y funciona igual de bien en light y dark sin volverse neón.
- **Un solo acento, no una paleta multicolor:** evita el efecto "cada sección un color" del portfolio viejo (azul/púrpura/naranja simultáneos), que es parte de lo que el usuario identificó como genérico.

### Tipografía
- **Headlines:** Fraunces (serif variable, con personalidad editorial) vía `next/font/google`.
- **Body / UI:** Inter vía `next/font/google`.
- **Por qué:** la referencia usa un sans-serif genérico para todo; combinar un serif editorial en headlines con un sans limpio en el resto da identidad propia sin sacrificar legibilidad, y difiere tanto de la referencia (solo sans) como del portfolio viejo (Geist en todo).

### Elemento gráfico del Hero (reemplazo del "blob 3D")
- **Decisión:** `HeroGraphic.tsx` — una composición de 2-3 tarjetas flotantes construidas 100% en HTML/CSS (sin imágenes, sin librería 3D), con contenido real y relevante al perfil de Marcos en vez de datos genéricos:
  1. Card "API Response" — bloque de código con un JSON de ejemplo real (ej. respuesta de un endpoint tipo AutoTurnos/SecureHire).
  2. Card "Deploy" — estado de un deploy (`autoturnos.tech` · `v1.x` · ✓), reforzando el proyecto destacado.
  3. Card pequeña de disponibilidad ("Disponible para trabajar").
  - Se posicionan con `transform: rotate()/translate()` superpuestas, con una animación sutil de parallax al mover el mouse usando `motion` (`useMotionValue` + `useTransform`), y un fondo de gradiente radial suave (`--accent` al 8-12% de opacidad) detrás, sin imagen ni blur pesado de asset.
- **Por qué:** cumple el pedido de "usar la referencia como inspiración, no calcarla" — mantiene la idea de tarjetas flotantes que dan profundidad y sofisticación, pero con contenido propio y real (no un blob 3D abstracto y genérico), cero dependencias nuevas (Motion ya está en el stack) y carga instantánea.
- **Alternativas descartadas:** blob/toroide 3D con Three.js/React Three Fiber (peso de bundle injustificado para una landing), ilustración SVG custom abstracta (no aporta información, es decoración pura).

## Variables de entorno requeridas

Ninguna. Al no haber backend propio ni servicios pagos integrados, no hay secretos que gestionar. Si más adelante se agrega envío real de email (descartado por ahora, ver PRD §7 Post-MVP), ahí sí se sumaría `RESEND_API_KEY` o similar.

## Edge cases y consideraciones importantes

- **AutoTurnos sin imagen todavía:** `image: null` en `projects.ts` — `ProjectCard` debe manejar ese caso con un placeholder visual consistente con la paleta (no un ícono roto ni un `<img>` vacío). No bloquea el desarrollo del resto del grid.
- **AutoTurnos sin GitHub público:** `links.github` queda `undefined` — el botón de "Ver código" simplemente no se renderiza para ese proyecto (mismo patrón ya usado para proyectos sin `live`/`video` en el portfolio viejo).
- **Video de SecureHire (`demo_securehire.mp4`):** es un asset pesado para servir directo desde `public/`. Para MVP se migra tal cual (como en el portfolio viejo) sirviéndolo con `<video>` nativo dentro del modal, pero queda anotado como candidato a mover a un host de video externo (ej. Vercel Blob o YouTube no listado) si el tamaño de repo/build se vuelve un problema — no se decide ahora sin medir el peso real del archivo.
- **Flash de idioma en la carga inicial:** al hidratar `language` desde `localStorage` después del primer render, puede haber un parpadeo de 1 frame ES→EN para usuarios que ya eligieron inglés. Aceptable para el alcance del proyecto; si molesta, se resuelve con un script inline pre-hidratación (mismo patrón que se usaría para dark mode).
- **Traducción de `LanguageSkill.name`:** "Español" no es un nombre propio, cambia a "Spanish" en inglés — por eso ese campo también es `Bilingual` a diferencia de `Project.title`, que sí es nombre propio y no se traduce.
- **Accesibilidad del toggle de idioma:** debe ser un `<button>` real (no un `<div>` clickeable) con `aria-label` dinámico ("Cambiar a inglés" / "Switch to Spanish"), consistente con el resto de botones interactivos del sitio.

## Orden de implementación sugerido (para `/impl`)

1. Setup del proyecto (Next.js + TS + Tailwind + fonts) + `LanguageProvider` + paleta en `globals.css`.
2. `Header` + `Footer` + `ui/` primitivos (Button, Badge, Card, SectionHeading) — se reutilizan en todo el resto.
3. `Hero` + `HeroGraphic` (la pieza visual más distintiva, conviene validarla temprano).
4. `Projects` + `ProjectCard` con los 6 proyectos (AutoTurnos primero, con placeholder de imagen).
5. `About` + `CapabilityGrid`, `TechStack`, `Services`, `Languages`, `Certifications`.
6. `Contact` (mailto) + ensamblado final en `app/page.tsx`.
7. Pulido responsive + (opcional) dark mode.
