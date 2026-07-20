# PRD — Portfolio Personal de Marcos Pirchio Giani (v2)

## 1. Contexto y problema

El portfolio actual (`/Users/marcospirchio/Desktop/Portfolio`) tiene una estética neón/cyberpunk oscura (partículas, glow, gradientes azul-púrpura-naranja) que se percibe genérica / "vibecodeada". El objetivo es reconstruirlo desde cero, manteniendo toda la información real (proyectos, bio, contacto, stack, idiomas, certificaciones) pero con un diseño propio, con dirección visual definida y paleta de colores propia — inspirado en una referencia visual provista por el usuario, sin copiarla literalmente.

## 2. Usuarios objetivo

- **Reclutadores técnicos / responsables de RR.HH.** buscando perfiles junior de backend o full stack — necesitan evaluar rápido: stack, proyectos reales, nivel de inglés, contacto directo.
- **Clientes potenciales de desarrollo freelance** (PyMEs, negocios locales) — necesitan ver casos de éxito (ej. Nordic Home, AutoTurnos) y una vía de contacto simple.
- **Reclutadores/clientes de habla inglesa** — de ahí el toggle ES/EN.

## 3. Objetivos del producto

1. Comunicar en los primeros 5 segundos quién es Marcos y qué hace (hero claro, sin ruido visual).
2. Dar protagonismo visual a los proyectos (preview de imagen grande + acciones claras: demo, código, video).
3. Dejar "preparado" un slot destacado (posición #1) para AutoTurnos, el proyecto más ambicioso, con link directo a producción (autoturnos.tech).
4. Permitir cambiar idioma (ES/EN) sin fricción, sin routing ni librerías de i18n.
5. Sentirse una pieza de diseño propia — no una plantilla — manteniendo simplicidad de mantenimiento (sitio estático, sin backend propio salvo lo estrictamente necesario).

## 4. Contenido extraído del portfolio actual (fuente de verdad)

### Identidad / Hero
- Nombre: **Marcos Pirchio Giani**, 22 años.
- Título: Desarrollador Backend & Full Stack.
- Tagline: "Creo soluciones digitales, robustas y a medida. Especializado en transformar ideas complejas en sistemas funcionales."
- Estado: técnico en Desarrollo de Software, cursando Licenciatura en Gestión de Tecnologías de la Información (UADE). Busca su primera experiencia laboral en sistemas, preferentemente backend.
- CTAs originales: "Hablemos" (→ contacto) / "Ver Proyectos".

### Sobre mí (bio completa)
> Me llamo Marcos Pirchio Giani, tengo 22 años. Soy Técnico en Desarrollo de Software, y actualmente curso la Licenciatura en Gestión de Tecnologías de la Información en la Universidad Argentina de la Empresa (UADE). A lo largo de mi formación académica, he tenido la oportunidad de trabajar en diversos proyectos, entre ellos la creación de plataformas web dinámicas y APIs RESTful aplicando buenas prácticas de desarrollo y trabajo en equipo. Estas experiencias me permitieron fortalecer mis habilidades técnicas y aprender a resolver desafíos reales en entornos colaborativos.
>
> Actualmente me encuentro en la búsqueda de mi primera experiencia laboral en el área de sistemas, preferentemente en el desarrollo backend, aunque cuento con la capacidad y predisposición para adaptarme a diferentes áreas. Estoy plenamente dispuesto a aprender todo lo que sea necesario y motivado por aportar valor a proyectos reales, creciendo tanto en lo profesional como en lo personal.

Foto de perfil disponible: `imagen.JPEG`.

### Proyectos (orden final: AutoTurnos primero, luego el resto)

1. **AutoTurnos** *(nuevo — no estaba en el portfolio viejo, dato provisto directamente por el usuario)*
   - Descripción: Plataforma SaaS de gestión de turnos para profesionales independientes en Argentina (nutricionistas, psicólogos, abogados, etc.). Reserva online con calendario personalizado, sincronización con Google Calendar, políticas de cancelación/reprogramación, directorio de clientes, lista de espera, exportación iCal. Suscripción freemium/paga con cobro vía MercadoPago (Checkout Pro + OAuth), verificación de email y registro con slug personalizado (`autoturnos.tech/tu-nombre`).
   - Stack: Java (Spring Boot) + PostgreSQL (backend), Next.js/TypeScript (frontend), Docker Compose sobre DigitalOcean, CI/CD con GitHub Actions, automatizaciones internas con n8n.
   - Links: demo en producción → `https://autoturnos.tech`. Sin repo público (privado) — no se linkea GitHub.
   - Imagen: **pendiente** (no hay screenshot todavía — se deja placeholder hasta que el usuario provea uno).

2. **SecureHire**
   - Plataforma SaaS de reclutamiento con IA: analiza/resume CVs, evaluaciones y compara candidatos. Reduce 50% las tareas manuales, mejora 30% la precisión del filtrado con IA, acelera 30% el proceso de contratación.
   - Stack: Java, Spring Boot, MongoDB, Next.js, IA.
   - Links: GitHub `github.com/marcospirchio/SecureHire`, video demo (`demo_securehire.mp4`).
   - Imagen: `SecureHireLogo.png`.

3. **Nordic Home**
   - E-commerce para PyMEs/negocios locales: catálogo dinámico, filtros, órdenes que van directo al WhatsApp del vendedor (sin pasarela de pago). Código reutilizable/escalable para adaptar a distintas marcas.
   - Stack: React, Next.js.
   - Links: demo `https://nordic-home-muebles.vercel.app/`.
   - Imagen: `Nordic-Home-Imagen.png`.

4. **RuteAR**
   - App para calcular costo total de un viaje en auto (combustible + peajes en tiempo real) usando Google Maps Platform + base de datos propia de consumo por modelo de vehículo.
   - Stack: React, Next.js, Google Maps API.
   - Links: GitHub `github.com/marcospirchio/CalculadoraDeCombustible`, demo `https://calculadora-de-combustible.vercel.app/`.
   - Imagen: `Rutear_Imagen.png`.

5. **Propsuite**
   - SaaS de gestión integral de edificios/consorcios: unidades, propietarios, inquilinos, reclamos.
   - Stack: Java, Spring Boot, SQL Server, React.
   - Links: GitHub `github.com/marcospirchio/Propsuite`.
   - Imagen: `Propsuite.png`.

6. **Sistema de Gestión de Autopartes**
   - Gestión de inventario de autopartes: stock, proveedores, ventas, reportes automáticos.
   - Stack: Java, React.
   - Links: GitHub `github.com/marcospirchio/SistemaDeGestionDeAutopartes`.
   - Imagen: `autopartes2.png`.

### Servicios ofrecidos
1. **Landing Pages** — presencia web oficial.
2. **Sistemas de Gestión a Medida** — turnos, stock, paneles de administración.
3. **Automatización de Tareas** — reemplazo de tareas repetitivas manuales.
4. **Consultoría y Desarrollo** — soluciones a medida desde cero.

### Stack tecnológico (para mostrar en el sitio)
- Frontend: React.js, Tailwind CSS, Next.js.
- Backend: Python, Java (Spring Boot).
- Bases de datos: MongoDB, SQL Server, PostgreSQL (sumado por AutoTurnos).
- Herramientas: Docker, GitHub, Git, Postman, n8n (sumado por AutoTurnos).

### Idiomas
- Español — nativo.
- Inglés — avanzado. Certificaciones: Cambridge B2 First (`FirstCertificateExam.pdf`), EF SET C2 Proficient (`cert.efset.org/rmSCeW`).
- Portugués — básico a intermedio.

### Certificaciones
- Curso Introductorio de Python — IEEE ITBA Student Branch (`IEEE - ITBA Curso Introductorio de Python.pdf`).
- Curso de Análisis de Datos en Python (Pandas, Matplotlib) — IEEE ITBA (`IEEE - ITBA Curso Analisis de Datos en Python.pdf`).

### Contacto
- Email: `pirchiomarcos@gmail.com`.
- GitHub: `github.com/marcospirchio`.
- LinkedIn: `linkedin.com/in/marcos-pirchio-giani`.
- Formulario actual: sin backend, arma un `mailto:` con nombre/email/mensaje.

### Assets disponibles (en el proyecto viejo, se migran)
- Foto de perfil `imagen.JPEG`.
- Imágenes de proyectos (`SecureHireLogo.png`, `Nordic-Home-Imagen.png`, `Rutear_Imagen.png`, `Propsuite.png`, `autopartes2.png`).
- Video demo SecureHire (`demo_securehire.mp4`).
- 3 PDFs de certificados/certificaciones.
- **Falta:** imagen/screenshot de AutoTurnos.

## 5. Dirección de diseño (aprobada por el usuario, a partir de imagen de referencia)

Referencia: portfolio claro tipo producto SaaS — nav superior con "Let's talk" en pill oscura, hero con eyebrow + headline editorial grande, gráfico abstracto tipo blob/toroide 3D con tarjetas UI flotantes, grid de proyectos con preview de imagen grande, sección "about" con grid de 6 tarjetas de capacidades, timeline de proceso en 4 pasos, banner de contacto oscuro final.

**No se copia tal cual** — se usa como inspiración de estructura y nivel de pulido. Se define paleta y sistema propios (no el mismo azul/negro de la referencia). Requisitos explícitos del usuario:
- Debe sentirse con diseño y paleta propios, no "vibecodeado" ni genérico.
- Los proyectos deben tener preview de imagen grande y llamativa, con botones condicionales: demo/deploy si existe, GitHub si existe, video si existe.
- AutoTurnos ocupa la posición #1 del grid de proyectos, con link a `autoturnos.tech`.
- Dark mode: **opcional**, se implementa como nice-to-have si el tiempo lo permite (toggle simple con `next-themes` o CSS variables + clase en `html`).

## 6. Features — MVP

### Feature 1: Hero
- Descripción: eyebrow ("Software Developer"), headline editorial con palabra destacada, subtexto (tagline + bio corta), dos CTAs (ver proyectos / contacto), badge de disponibilidad, elemento gráfico distintivo (no necesariamente el mismo blob 3D de la referencia — se define en /arch).
- Criterios de aceptación:
  - [ ] Headline y CTAs traducidos ES/EN.
  - [ ] Responsive desde 375px.
  - [ ] Sin librerías 3D pesadas si no aportan valor real de carga.

### Feature 2: Proyectos destacados
- Descripción: grid de proyectos con preview de imagen, categoría, título, descripción corta, tags de stack, y botones condicionales (Demo / GitHub / Video) según qué link tenga cada proyecto. AutoTurnos fijo en la posición #1.
- Criterios de aceptación:
  - [ ] AutoTurnos aparece primero, con botón "Ver demo" apuntando a `autoturnos.tech` (sin botón de GitHub, es privado).
  - [ ] Cada proyecto muestra solo los botones de las acciones que realmente tiene disponibles.
  - [ ] Imágenes optimizadas con `next/image`.
  - [ ] Placeholder visual prolijo para AutoTurnos hasta tener screenshot real.

### Feature 3: Sobre mí
- Descripción: bio completa (traducida), foto de perfil, grid de capacidades/áreas (a definir en base a: Backend, Automatización/n8n, Bases de datos, DevOps/Docker, Arquitectura limpia, Mentalidad de producto).
- Criterios de aceptación:
  - [ ] Contenido fiel a la bio original, sin inventar experiencia no mencionada.
  - [ ] Traducción EN coherente (no literal palabra por palabra).

### Feature 4: Stack tecnológico
- Descripción: se mantienen las categorías (Frontend, Backend, Bases de datos, Herramientas), sumando PostgreSQL y n8n que aparecen por AutoTurnos.
- Criterios de aceptación:
  - [ ] Se listan todas las tecnologías reales extraídas, sin agregar tecnologías no mencionadas por el usuario.

### Feature 5: Servicios
- Descripción: las 4 tarjetas de servicios freelance, tal como están en el original (traducidas).

### Feature 6: Idiomas
- Descripción: Español/Inglés/Portugués con nivel y links a certificados donde corresponda.

### Feature 7: Certificaciones
- Descripción: las 2 certificaciones IEEE-ITBA con link a PDF.

### Feature 8: Contacto
- Descripción: formulario simple que arma un `mailto:` (igual que el original, sin backend), + links directos a GitHub/LinkedIn/Email.
- Criterios de aceptación:
  - [ ] Validación de campos requeridos en el cliente.
  - [ ] Accesible por teclado.

### Feature 9: Toggle de idioma (ES/EN)
- Descripción: un objeto de textos `{ es: {...}, en: {...} }` por sección, un botón "ES / EN" en el nav que cambia un estado de React (sin routing, sin librería de i18n, sin detección automática del navegador).
- Criterios de aceptación:
  - [ ] Todo el contenido visible tiene versión ES y EN.
  - [ ] El cambio de idioma no recarga la página.

### Feature 10: Header / Footer / navegación
- Descripción: nav sticky con logo "MP", links a secciones, footer con links rápidos y redes.

## 7. Features — Post-MVP

- Dark mode toggle (nice-to-have, se evalúa según tiempo — no bloquea el MVP).
- Reemplazo del placeholder de AutoTurnos por screenshot real cuando el usuario lo provea.
- Envío de formulario vía API route + servicio de email (descartado por ahora, el usuario prefirió mailto simple).
- Analíticas (Vercel Analytics se mantiene si se despliega en Vercel; no es prioridad de diseño).

## 8. Integraciones externas

- Ninguna integración de backend propia (sitio estático/SSG).
- Links salientes a: GitHub, LinkedIn, `autoturnos.tech`, demos de Vercel, video mp4 propio, PDFs de certificados.
- `next/font` para tipografía (a definir cuál en /arch, no se reutiliza necesariamente Geist).

## 9. Restricciones y decisiones técnicas conocidas

- Stack obligatorio: **Next.js + TypeScript** (App Router), consistente con el manual de trabajo del usuario.
- Sin `any` en TypeScript.
- Sin backend propio para contacto (mailto).
- i18n casero (objeto de textos + state), no `next-intl` ni rutas `/en`.
- Dark mode con CSS variables / clase en `html`, opcional y no bloqueante.
- Se migran los assets reales (imágenes, PDFs, video) del portfolio viejo a `public/` del proyecto nuevo.
- Paleta y sistema de diseño propios — a definir en `/arch` o en una skill de diseño (`frontend-design`, y evaluar `high-end-visual-design` dado el nivel de pulido de la referencia), sin clonar los colores/tipografía exactos de la imagen de referencia.
- Sigue el pipeline del manual de trabajo: este PRD → `/arch` (estructura de carpetas, componentes, esquema de datos de proyectos/i18n) → `/impl` → `/review` → `/tdd`.

## 10. Milestones

| Milestone | Features incluidas | Criterio de completitud |
|-----------|--------------------|--------------------------|
| M1 — Base y contenido | Setup Next.js+TS, Header/Footer, Hero, i18n básico | El sitio corre local con hero traducible ES/EN |
| M2 — Proyectos | Feature 2 (grid de proyectos, AutoTurnos #1) | Los 6 proyectos se ven con sus botones condicionales correctos |
| M3 — Contenido personal | Sobre mí, Stack, Servicios, Idiomas, Certificaciones | Todas las secciones del contenido original están migradas y traducidas |
| M4 — Contacto y cierre | Contacto (mailto), pulido responsive, dark mode (si aplica) | Sitio completo, responsive, revisado con `/review` |

## 11. Preguntas abiertas

- Falta el screenshot/imagen real de AutoTurnos — se usa placeholder hasta que el usuario lo provea.
- Definir en `/arch` qué elemento gráfico reemplaza al "blob 3D" de la referencia (puede ser más simple: ilustración custom, mockups de UI reales de los propios proyectos, etc.) para no clonar la referencia ni sobrecargar de dependencias (ej. Three.js) un portfolio que debe cargar rápido.
- Definir en `/arch` la paleta de color final (la referencia usa azul + neutros claros; se debe proponer una paleta propia).
- Confirmar si el deploy final va a Vercel (para mantener `@vercel/analytics`) u otro hosting.
