---
name: otro.blog.mas
description: Zine digital de autor, impreso en tinta y leído en pantalla.
colors:
  ink-black: "#0f0f0e"
  ink-soft: "#171715"
  text-dark: "#e7e5df"
  text-strong-dark: "#f8f7f3"
  muted-dark: "#a3a099"
  faint-dark: "#6f6c65"
  rule-dark: "#2b2b28"
  rule-strong-dark: "#46453f"
  code-dark: "#191917"
  paper-white: "#f7f6f2"
  paper-soft: "#efeee8"
  text-light: "#1b1a17"
  text-strong-light: "#0a0a08"
  muted-light: "#5f5c55"
  faint-light: "#8d8a82"
  rule-light: "#d9d7d0"
  rule-strong-light: "#b0ada4"
  code-light: "#eceae3"
  paper-print: "#ffffff"
typography:
  display:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "clamp(1.85rem, 1.1rem + 2.6vw, 2.9rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "1.8rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  section:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  subsection:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "1.12rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "1.3rem"
    fontWeight: 500
    lineHeight: 1.28
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.72
    letterSpacing: "0em"
  small:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.6
  code:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.65
  ui:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.09em"
  wordmark:
    fontFamily: "Spline Sans Mono, ui-monospace, monospace"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.3
rounded:
  hairline: "1px"
  sm: "2px"
spacing:
  xs: "4px"
  sm: "10px"
  md: "18px"
  lg: "28px"
  xl: "44px"
  xxl: "52px"
components:
  theme-toggle:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.muted-dark}"
    rounded: "{rounded.sm}"
    size: "32px"
  theme-toggle-hover:
    textColor: "{colors.text-strong-dark}"
  post-row:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.text-dark}"
    padding: "24px 0"
  post-title:
    textColor: "{colors.text-strong-dark}"
    typography: "{typography.title}"
  tag-link:
    textColor: "{colors.muted-dark}"
    typography: "{typography.label}"
  page-head:
    textColor: "{colors.text-strong-dark}"
    typography: "{typography.label}"
---

# Design System: otro.blog.mas

## Overview

**Creative North Star: "El índice de imprenta"**

El sitio se comporta como la tabla de contenidos de un cuaderno impreso: fecha apilada en un rail, título al centro, materias a la derecha, todo separado por hairlines de un píxel. La pantalla es papel o su inverso nocturno; la tinta nunca compite con el texto. La personalidad es exacta y silenciosa, con la densidad de un índice y el aire de una página bien compuesta.

El registro es "terminal limpio" por decisión del autor: una sola monoespaciada para todo el sitio, sin acentos cromáticos, sin pseudo-prompts, sin tarjetas. La mono no es un disfraz técnico: es la voz del zine, elegida y sostenida de punta a punta. Las decisiones de jerarquía se resuelven con escala, peso, espacio y hairlines, nunca con color.

El movimiento es escaso y funcional: una entrada escalonada en el índice y una línea de progreso de lectura de 1px. Nada más se mueve.

**Key Characteristics:**

- Monocromo estricto, tinta y papel, sin color de acento.
- Una sola familia: Spline Sans Mono, self-hosted.
- Hairlines de 1px como único sistema de separación y profundidad.
- Índice en tres columnas: fecha, título, tags.
- Medida de lectura de 66 caracteres y ritmo vertical constante.

## Colors

Paleta monocroma con dos suelos intercambiables: papel claro y tinta nocturna. No existe color de acento; el énfasis es tipográfico.

### Primary

- **Tinta nocturna** (#0f0f0e): fondo por defecto del tema oscuro; negro neutro sin tinte verdoso.
- **Papel** (#f7f6f2): fondo del tema claro, blanco cálido de página impresa.

### Neutral

- **Tinta de lectura** (#e7e5df / #1b1a17): cuerpo de texto en oscuro y claro; contraste alto, sin negros puros en el cuerpo.
- **Tinta fuerte** (#f8f7f3 / #0a0a08): títulos, wordmark y estados activos.
- **Tinta apagada** (#a3a099 / #5f5c55): fechas, tags, metadatos y pies; nunca por debajo de 4.5:1.
- **Regla** (#2b2b28 / #d9d7d0): hairlines entre filas y secciones.
- **Regla fuerte** (#46453f / #b0ada4): bordes de foco, citas y separadores destacados.
- **Papel de código** (#191917 / #eceae3): fondo de bloques `pre` y `code`.
- **Papel de impresión** (#ffffff): única aparición de blanco puro, reservada a `@media print`.

### Named Rules

**The No-Color Rule.** No hay color de acento. Ningún estado se comunica con un tono nuevo: se comunica con peso, inversión o subrayado. El verde fósforo, el neón y cualquier acento cromático quedan fuera del sistema.

**The Two Grounds Rule.** Oscuro y claro son el mismo sistema invertido, no dos temas. Los tokens cambian de valor, nunca de rol.

## Typography

**Display Font:** Spline Sans Mono (con ui-monospace, SFMono-Regular, Menlo, Consolas)
**Body Font:** Spline Sans Mono (con la misma pila de reserva)

**Character:** Mono humanista de aperturas amplias, con itálica real. Legible a 17px pese a la retícula fija; aporta carácter de zine sin caer en la mono de código genérica.

### Hierarchy

- **Display** (500, `clamp(1.85rem, 1.1rem + 2.6vw, 2.9rem)`, 1.1, -0.035em): título del post; máximo 24ch para forzar un salto editorial.
- **Headline** (600, 1.8rem, 1.2): `h1` internos del artículo, ya excepcionales; dos posts usan `h1` de markdown.
- **Section** (600, 1.5rem, 1.25): `h2` de sección; 3.25rem de aire arriba.
- **Subsection** (600, 1.12rem, 1.35): `h3`; mismo peso semibold, un paso claro sobre el cuerpo.
- **Title** (500, 1.3rem, 1.28): título de cada fila del índice.
- **Body** (400, 1.0625rem, 1.72): cuerpo a 66ch; párrafos con 1.6em de separación.
- **Small / Code** (400, 0.9rem / 0.875rem, 1.6 / 1.65): tablas, notas y bloques de código.
- **UI** (400, 0.8rem, 1.55): tagline y enlace de salto.
- **Label** (500, 0.72rem, 0.09–0.14em, mayúsculas): fechas, tags, nav, meta y pies. Cifras tabulares.
- **Wordmark** (600, 1rem, 1.3): marca del sitio, única aparición de ese peso en texto de interfaz.

### Named Rules

**The One-Voice Rule.** Una sola familia en todo el sitio. La jerarquía se construye con tamaño, peso y espacio; nunca se introduce una segunda fuente para "descansar" del mono.

**The Caps Label Rule.** Todo lo que no es texto de lectura ni título va en mayúsculas pequeñas con tracking amplio. Es la señal de que algo es aparato editorial, no contenido.

## Layout

Contenedor de 68rem para cabecera, índice y pie; columna de lectura de 66ch centrada para el artículo. El índice usa tres columnas —rail de fecha de 5.5rem, título flexible y columna de tags de 18rem— con `gap` de 1.75rem. Por debajo de 1080px la columna de tags cae bajo el título; por debajo de 760px todo se apila y la fecha pasa de columna a línea.

Ritmo: 3rem de aire sobre la cabecera de página, filas con 1.55rem vertical, 3.25rem antes de un `h2`, 5rem al final del artículo. El espacio por encima de un encabezado siempre supera el de debajo.

## Elevation & Depth

Sin sombras. La profundidad se expresa solo con hairlines de 1px y cambios de fondo de un paso (papel de código, papel suave). La única capa flotante es la línea de progreso de lectura, fija al borde superior y de 1px, que no proyecta sombra ni desenfoca.

### Named Rules

**The Flat Rule.** Ningún elemento se eleva. Si algo necesita separarse, se separa con una regla o con espacio, no con una sombra.

**The 1px Rule.** Todas las divisiones miden 1px. Las reglas de 2px o más pertenecen al vocabulario anterior y no se reintroducen.

## Shapes

Radios de 2px como máximo, reservados a imágenes, bloques de código y el botón de tema. Bordes rectangulares en todo lo demás. Sin píldoras, sin tarjetas, sin círculos decorativos. Las etiquetas son texto, no cápsulas. Los iconos son SVG dibujados a 1.6px de trazo.

## Components

### Buttons

- **Shape:** cuadrado de 32px con radio 2px.
- **Primary:** el único botón es el toggle de tema; fondo transparente, borde `rule`, icono apagado.
- **Hover / Focus:** borde `rule-strong` y texto fuerte; foco con outline de 2px y offset 3px.
- **Behavior:** alterna `.light` en `html`, persiste en `localStorage` y actualiza `aria-pressed`.

### Chips

- **Style:** no existen chips. Los tags son enlaces de texto en minúsculas, `muted`, con 0.9rem de separación; sin fondo, sin borde, sin paréntesis.

### Cards / Containers

- **Corner Style:** sin tarjetas; las filas del índice son contenedores planos.
- **Background:** el del documento, sin variación.
- **Shadow Strategy:** ninguna (ver Elevation).
- **Border:** hairline superior por fila y hairline de cierre al final del índice.
- **Internal Padding:** 1.55rem vertical por fila.

### Navigation

Wordmark a la izquierda, enlace `tags` y toggle a la derecha, en una sola fila. Labels en mayúsculas de 0.72rem con tracking 0.11em, color apagado; el estado activo usa tinta fuerte y `aria-current="page"`. En el post, la vuelta al índice es un backlink con flecha SVG y micro-desplazamiento de 2px al hover.

### Index Row (signature)

Fila de tres columnas: fecha apilada (día/mes sobre año, tabular, mayúsculas), título de 1.3rem y tags alineados a la izquierda de su columna. El título es el único enlace de fila, con un `::after` que cubre toda la fila para ampliar el área de clic; los tags quedan por encima en z-index y siguen siendo enlaces propios. Al hover o focus-within, el subrayado del título crece de 0 a 100% y el título se desplaza 2px; la fecha sube un paso de contraste. La entrada inicial es un `rise` escalonado de 35ms por fila, cancelado con `prefers-reduced-motion`.

### Article

Título display, meta en mayúsculas con fecha y minutos de lectura, tags debajo, cover a ancho de columna. Cuerpo a 66ch: enlaces siempre subrayados con `rule-strong`, citas con barra izquierda de 1px e itálica real, código inline con fondo `code` y radio 2px, `pre` sin resaltado de sintaxis y en tinta plana, imágenes sin borde y con radio 2px.

### Footer

Una línea de hairline, dos extremos: copyright a la izquierda y número de textos a la derecha. Labels de 0.7rem en mayúsculas.

## Do's and Don'ts

### Do:

- **Do** usar hairlines de 1px y espacio para separar; el aire es el sistema.
- **Do** mantener el cuerpo entre 65 y 75ch y el título de post con `text-wrap: balance`.
- **Do** usar cifras tabulares en fechas, conteos y minutos de lectura.
- **Do** respetar `prefers-reduced-motion` y cancelar la entrada del índice.
- **Do** mantener el contraste AA en ambos suelos y el foco visible con outline de 2px.

### Don't:

- **Don't** introducir color de acento, neón ni verde fósforo.
- **Don't** reintroducir pseudo-prompts (`>_`, `$`, `//`), corchetes en tags ni animaciones tipo Matrix.
- **Don't** usar tarjetas, sombras, degradados ni radios mayores de 2px.
- **Don't** añadir una segunda familia tipográfica, ni siquiera para citas o código.
- **Don't** resaltar sintaxis con color; el código se lee en tinta plana.
