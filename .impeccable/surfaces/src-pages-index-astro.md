---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/posts/[slug].astro","src/pages/tags/index.astro","src/pages/tags/[tag].astro"]
---

# home

## Scope and mode

Read. Rediseño visual completo del sitio público: índice, post, índice de tags y tags. Contenido, rutas, frontmatter y despliegue en GitHub Pages no cambian.

## Audience and job

Lector hispanohablante de ensayo y cultura técnica que llega desde un enlace. Quiere saber qué hay publicado, elegir un texto y leerlo sin fricción.

## Constraints

Astro 6 estático, base `/astroblog`, cero dependencias nuevas, cero fuentes externas en runtime, tema oscuro y claro persistido, contenido y copy existentes.

## Chosen direction

### Direction contract

THESIS: Un índice de imprenta. El blog se lee como la tabla de contenidos de un cuaderno impreso, no como una terminal ni como un feed; se rechazan tarjetas, neón, pseudo-prompt y sombras.

OWN-WORLD: Monocromo neutro, tinta sobre papel y su inverso, una sola mono Geist self-hosted, hairlines de 1px, rail de fecha apilada, radios de 2px como máximo y ningún acento cromático: el énfasis es peso, inversión y subrayado.

STORY: El lector entiende en un vistazo qué se publica, cuándo y sobre qué, entra a un texto con medida cómoda y vuelve al índice sin perder la posición.

FIRST VIEWPORT: Cabecera mínima con wordmark, tagline, nav y toggle; hairline; índice en tres columnas con fecha apilada a la izquierda, título al centro y tags a la derecha, con la primera fila sobre el pliegue y el resto cortado a la vista.

FORM: seed: none (pinned). Dirección fijada por el usuario al aprobar la propuesta: "Índice de imprenta. No es una terminal: es la página de contenidos de un cuaderno impreso, impresa en tinta." Confirmado con: "haz lo recomendado".

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Memorable moment

La fila del índice que responde al hover extendiendo su hairline y desplazando el título 2px, más la línea de progreso de lectura de 1px en el post.

## Unresolved

- Sin paginación: el índice lista los doce posts completos.
- Sin imágenes de portada en el índice; solo dentro del post.
