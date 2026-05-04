# Informe del Proyecto: Zine Digital con Astro

## Descripción General

Se ha construido un blog personal tipo zine digital utilizando **Astro v6.2.1**. El proyecto cumple con todos los requisitos establecidos: minimalista, estático, sin dependencias innecesarias, y con un diseño oscuro enfocado en contenido de arte, poesía, tecnología y hacktivismo.

---

## Arquitectura del Proyecto

### Estructura de Directorios
```
astroblog/
├── src/
│   ├── content.config.ts          # Configuración de content collections
│   ├── content/posts/             # Posts en carpetas individuales
│   │   ├── primer-zine/
│   │   │   └── index.md
│   │   └── circuito-entropia/
│   │       └── index.md
│   ├── layouts/
│   │   └── PostLayout.astro       # Layout para posts
│   └── pages/
│       ├── index.astro            # Página principal (listado)
│       └── posts/
│           └── [slug].astro       # Página dinámica de post
├── public/                        # Archivos estáticos públicos
├── dist/                          # Build de producción (generado)
├── package.json
├── astro.config.mjs
└── tsconfig.json
```

---

## Componentes Implementados

### 1. Content Collection Schema (`src/content.config.ts`)
- **Loader**: `glob()` para cargar archivos Markdown
- **Patrón**: `**/index.md` (cada post en su propia carpeta)
- **Schema con Zod**:
  - `title`: string (requerido)
  - `date`: date (convertido automáticamente desde string)
  - `tags`: array de strings
  - `cover`: string opcional (ruta a imagen de portada)

### 2. Posts de Ejemplo
**Post 1: `primer-zine`**
- Título: "Primer Zine: Manifiesto Digital"
- Tags: arte, hacktivismo, zine
- Fecha: 15 abril 2026

**Post 2: `circuito-entropia`**
- Título: "Circuito Entropía: Microcontroladores DIY"
- Tags: tecnología, DIY, microcontroladores
- Fecha: 28 abril 2026

### 3. Layout (`src/layouts/PostLayout.astro`)
- Diseño oscuro: fondo `#111`, texto `#eee`
- Fuente monospace (Courier New)
- Estilos inline, sin dependencias externas
- Renderiza: título, fecha, tags, imagen de portada y contenido

### 4. Página de Listado (`src/pages/index.astro`)
- Obtiene todos los posts con `getCollection('posts')`
- Ordena por fecha (más reciente primero)
- Muestra: título (enlace), fecha formateada, tags
- Diseño consistente con el resto del sitio

### 5. Página Dinámica (`src/pages/posts/[slug].astro`)
- Genera rutas estáticas con `getStaticPaths()`
- Extrae el slug de la carpeta del post
- Renderiza el contenido Markdown con `render(post)`
- Usa `PostLayout` para envolver el contenido

---

## Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|-----------|---------|-----------|
| Astro | v6.2.1 | Framework estático |
| Zod | (incluido en Astro) | Validación de schema |
| TypeScript | (configurado) | Tipado estático |

**Dependencias adicionales**: Ninguna. Solo Astro y sus módulos integrados.

---

## Características Cumplidas

✅ **Astro**: Framework principal  
✅ **Content Collections**: Configurado con `src/content.config.ts`  
✅ **Posts en carpetas**: Cada post tiene su `index.md` + imágenes  
✅ **Sin CMS externo**: Todo local en Markdown  
✅ **Sin backend**: Sitio 100% estático  
✅ **Schema con Zod**: Validación de frontmatter  
✅ **Diseño minimalista oscuro**: Estética zine  
✅ **Sin React**: Solo Astro components  
✅ **Sin autenticación**: No requerida  
✅ **Sin base de datos**: Archivos planos  

---

## Cómo Ejecutar

### Desarrollo
```bash
cd /home/peter/proyectos-web/astroblog
npm run dev
```
Accede a `http://localhost:4321`

### Build de Producción
```bash
npm run build
```
Los archivos estáticos se generan en `dist/`

### Preview de Producción
```bash
npm run preview
```

---

## Agregar Nuevos Posts

1. Crear carpeta en `src/content/posts/{slug}/`
2. Crear `index.md` con frontmatter:
```markdown
---
title: "Título del Post"
date: "2026-05-01"
tags: ["tag1", "tag2"]
cover: "./imagen.jpg"  # opcional
---
```
3. Agregar imágenes en la misma carpeta
4. El sitio se actualiza automáticamente en modo dev

---

## Build Stats

```
✓ 3 páginas generadas estáticamente
  - / (index)
  - /posts/circuito-entropia
  - /posts/primer-zine
✓ Tiempo de build: ~1.2 segundos
✓ Sin errores de validación
```

---

## Conclusión

El proyecto cumple con todos los requisitos especificados. Es un blog estático, minimalista y fácil de mantener. La estructura de carpetas para posts facilita la organización de imágenes y contenido relacionado. El uso de Content Collections con Zod asegura que todos los posts tengan la estructura correcta.

**Estado**: Listo para producción.
