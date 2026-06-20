---
title: "Poetry Camera: la camara que escribe poemas en vez de tomar fotos"
date: "2026-06-19"
tags: ["arte", "tecnologia", "DIY", "IA"]
cover: "./poetry-camera.jpg"
---

Una camara que no toma fotos. Suena a contradiccion, pero existe y se llama **Poetry Camera**: un dispositivo con lente que, en lugar de capturar imagenes, imprime poemas generados por inteligencia artificial sobre lo que ve.

El funcionamiento es simple pero provocador. La camara observa una escena a traves de su lente, procesa la informacion visual con un modelo de IA (especificamente **Claude de Anthropic**) y escupe un poema impreso en papel termico, al mas puro estilo de las camaras instantaneas. No almacena ninguna foto. No toma ninguna imagen. Solo produce versos.

## Origen artistico

Poetry Camera nacio como un proyecto artistico de **Kelin Carolyn Zhang** y **Ryan Mather**. Lo que empezo como una curiosidad experimental fue evolucionando hasta convertirse en un producto real gracias a la colaboracion con **Seeed Studio** y la residencia **MIT Research at Scale**, que permitieron pasar de la fabricacion artesanal a una produccion mas estructurada.

> "Lo que no intento hacer es que la IA escriba un poema que yo podria haber escrito por mi cuenta. Estas tecnologias son tan nuevas que es facil llegar con una perspectiva unica y hacer algo que el mundo no haya visto antes. Animaria a mas artistas a interactuar con la IA con una mente abierta y pensar en lo que podrian hacer que antes no era posible."
> -- Kelin Carolyn Zhang

![Persona usando Poetry Camera](./testimonial-anthropic.png)

## Como funciona

El hardware interno esta basado en **Raspberry Pi** y el diseno es **open source**, asi que cualquiera con los conocimientos y las piezas puede construir su propia version. Para quien prefiera el producto terminado, ya esta disponible para **preorden en $349**.

La camara incluye diales que no controlan velocidad de obturacion ni apertura, sino el **estilo poetico**: se puede elegir entre haiku, soneto o verso libre. Requiere conexion a internet para funcionar, ya que el modelo de IA opera en la nube.

## Una pregunta rara

Lo interesante de Poetry Camera no es tanto la calidad de los poemas que genera --una reseña de The Verge menciona que escribe "mala poesia"-- sino la pregunta que plantea: **que pasaria si una camara no tomara fotos sino que escribiera algo?**

Ese tipo de preguntas extranas son esenciales para crear arte. En un mundo donde la tecnologia fotografica avanza hacia mas resolucion, mas pixeles, mas fidelidad, este dispositivo va en la direccion opuesta: capturar la esencia de una escena no con imagenes, sino con palabras. Un recordatorio de que a veces la mejor herramienta para crear no es la mas obvia.

El proyecto completo, incluyendo los planos y el codigo, esta disponible en [GitHub](https://github.com/bokito-studio/poetry-camera-rpi) para quienes quieran explorar, modificar y construir el suyo propio.
