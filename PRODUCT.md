# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Lectores en español que llegan por un enlace, una búsqueda o una recomendación y quieren leer un ensayo completo. Comparten el interés por el arte, la poesía, la tecnología, el hacktivismo y la cultura DIY, y valoran una voz personal por encima de la cobertura noticiosa.

## Product Purpose

Blog personal de un autor que publica ensayos y notas sobre arte, poesía, tecnología, vigilancia, inteligencia artificial y electrónica DIY. Existe para sostener una voz crítica e independiente, lejos de la lógica de plataforma. El éxito es que alguien lea un texto entero y siga el hilo hacia otro.

## Positioning

Un zine digital de autor único: texto largo en primera persona, criterio propio y temas que cruzan tecnología con cultura, publicado en un sitio estático sin CMS, sin anuncios y sin dependencias externas.

## Operating Context

El autor escribe en Markdown dentro de una carpeta por post (`src/content/posts/<slug>/index.md`) con imágenes locales. El sitio se construye con Astro y se despliega en GitHub Pages bajo la base `/astroblog`. No hay backend, base de datos ni panel de edición.

## Capabilities and Constraints

- Publicación estática; agregar un post es agregar una carpeta con `index.md`.
- Frontmatter: `title`, `date` (ISO 8601), `tags`, `cover` opcional.
- Tags normalizados a minúsculas, sin acentos, con espacios como guiones.
- Listado paginado no implementado: el índice muestra todos los posts.
- Tema oscuro por defecto con variante clara persistida en `localStorage`.
- Sin frameworks de UI ni librerías externas más allá de Astro y sus integraciones.
- Base URL `/astroblog`; el sitio no funciona en la raíz del dominio.

## Brand Commitments

- Nombre: `otro.blog.mas`.
- Voz en español, primera persona, crítica y sin jerga publicitaria.
- Pilares temáticos: arte, poesía, tecnología, hacktivismo, DIY, microcontroladores.
- El sitio es un zine: austero, legible y sin ornamentos de producto comercial.

## Evidence on Hand

- Doce posts publicados en `src/content/posts/`, en español, con fechas entre 2026 y 2026.
- Imágenes locales en `public/images/posts/` y junto a algunos posts.
- Cita textual real en `poetry-camera`; captura de producto en la misma carpeta.
- No hay testimonios, métricas de audiencia, clientes ni datos de tráfico que se puedan citar.

## Product Principles

1. El texto manda: cualquier decisión de interfaz se subordina a la lectura.
2. Criterio de autor, no agregación: nada de contenido generado para llenar espacio.
3. Austeridad material: cero dependencias, cero rastreo, cero peso innecesario.
4. La técnica se explica desde dentro, con nombre y detalle, sin titulares vacíos.

## Accessibility & Inclusion

Contraste mínimo AA en ambos temas, foco visible, navegación por teclado, enlace de salto al contenido y respeto por `prefers-reduced-motion`.
