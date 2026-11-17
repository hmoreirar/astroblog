# AstroBlog

## Stack
- **Framework:** Astro 6
- **Runtime:** Node >=22.12.0
- **Lenguaje:** TypeScript
- **Estilos:** CSS global con tema oscuro/claro (src/styles/global.css) y tokens en `:root`
- **Linting:** ESLint con plugin de Astro
- **Formato:** Prettier
- **Fuente:** Spline Sans Mono self-hosted (`public/fonts/`), mono para todo el sitio
- **Base URL:** /astroblog (desplegado en GitHub Pages)

## Estructura
- `src/content/posts/` - Coleccion de posts en Markdown con frontmatter
- `src/content.config.ts` - Esquema de la coleccion (title, date, tags, cover)
- `src/pages/` - Paginas del sitio (index, posts, tags)
- `src/layouts/` - Layouts Astro (Base, PostLayout)
- `src/components/` - Componentes Astro (SiteHeader, SiteFooter, PostList, ThemeToggle, ReadingProgress)
- `src/utils/` - Utilidades (base.ts, tags.ts, dateFormat.ts)
- `src/styles/global.css` - Estilos globales con variables CSS
- `public/fonts/` - Fuente woff2 y licencia OFL
- `public/` - Archivos estaticos
- `dist/` - Build de produccion

## Convenciones
- Cada post vive en su propia carpeta con `index.md`
- Frontmatter: title, date (ISO 8601), tags (array de strings), cover (opcional)
- Tags se normalizan a minusculas sin acentos con espacios como guiones
- Formato de fecha: es-ES (ej. "15 de abril de 2026")
- Tema oscuro por defecto, con clase `.light` para modo claro
- Interfaz "indice de imprenta": monocromo, hairlines de 1px, rail de fecha y sin tarjetas ni sombras. No reintroducir pseudo-prompts (`>_`, `$`, `//`), neón ni radios grandes.
- Commits en espanol
- Sin importaciones de librerias externas mas alla de Astro y sus integraciones

## Titulos de los posts
Evitar la estructura rigida `Concepto: explicacion` (con dos puntos), tipica de IA. Reglas:
- Sin `X: Y` (un solo golpe, no la suma "palabra tecnica + definicion")
- Verbo o imagen antes que etiqueta tecnica ("Camaras que persiguen" > "Flock Cameras: vigilancia")
- Longitud corta (3-6 palabras)
- Tono critico, hacker y/o poetico, coherente con el blog
- Permitir frases nominales fuertes, preguntas, juegos de palabras y jerga propia

## Paginas principales
- `/` - Listado completo de posts (sin paginacion) con fecha y tags
- `/posts/[slug]/` - Post individual
- `/tags/` - Indice de tags con conteo
- `/tags/[tag]/` - Posts filtrados por tag
