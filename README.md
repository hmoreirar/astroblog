# Zine Digital

Blog estático minimalista construido con Astro, dedicado a compartir contenido sobre arte, poesía, tecnología, hacktivismo y cultura DIY. El diseño oscuro y la tipografía monospace buscan emular la estética de los fanzines impresos, adaptados al entorno digital.

## Características

- 100% estático, sin dependencias innecesarias más allá de Astro
- Posts organizados en carpetas individuales con Markdown y assets locales
- Validación de frontmatter con Zod a través de Content Collections
- Diseño oscuro, enfocado en la legibilidad y la estética zine
- Sin frameworks adicionales (React, Vue, etc.), sin CMS, sin base de datos

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando         | Acción                                             |
| --------------- | -------------------------------------------------- |
| npm run dev     | Inicia el servidor de desarrollo en localhost:4321 |
| npm run build   | Genera el sitio de producción en ./dist/           |
| npm run preview | Previsualiza el build local antes de desplegar     |

## Agregar nuevos posts

1. Crear una carpeta en `src/content/posts/` con el slug del post (por ejemplo, `nuevo-post/`)
2. Dentro de la carpeta, crear un archivo `index.md` con el frontmatter correspondiente:
   ```markdown
   ---
   title: "Título del post"
   date: "2026-05-04"
   tags: ["arte", "tecnología"]
   cover: "./imagen.jpg" # Opcional, ruta relativa a la carpeta del post
   ---
   ```
3. Agregar cualquier imagen o asset en la misma carpeta del post
4. En modo desarrollo, el sitio se actualiza automáticamente con el nuevo contenido

## Tecnologías utilizadas

| Tecnología | Versión     | Propósito                     |
| ---------- | ----------- | ----------------------------- |
| Astro      | v6.2.1      | Framework de sitios estáticos |
| Zod        | Integrado   | Validación de esquemas        |
| TypeScript | Configurado | Tipado estático               |
