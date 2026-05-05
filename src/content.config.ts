import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Schema para los posts del zine digital
const posts = defineCollection({
  loader: glob({
    base: "./src/content/posts",
    pattern: "**/index.md", // Cada post vive en su propia carpeta con index.md
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(), // Convierte string a Date para ordenamiento
    tags: z.array(z.string()),
    cover: z.string().optional(), // Imagen de portada opcional
  }),
});

export const collections = { posts };
