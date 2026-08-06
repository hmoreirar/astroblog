---
title: "Flock Cameras: cuando la inteligencia artificial deja de observar y comienza a seguirte"
date: "2026-08-06"
tags: ["vigilancia", "privacidad", "ia", "vision-artificial", "tecnologia"]
cover: ""
---

Hace unos días vi una imagen que mostraba todo lo que una cámara de **Flock Safety** era capaz de detectar sobre un vehículo. A simple vista parecía una cámara de seguridad más. En realidad, era un ejemplo bastante claro de hasta dónde ha llegado la visión artificial moderna.

Lo primero que pensé fue: *esto es técnicamente impresionante*.

Lo segundo fue bastante más incómodo.

*¿Qué ocurre cuando una tecnología diseñada para aumentar la seguridad también es capaz de registrar prácticamente todos nuestros movimientos?*

---

## Mucho más que leer una patente

La mayoría de la gente piensa que una cámara ALPR (*Automatic License Plate Recognition*) simplemente toma una fotografía y utiliza OCR para leer una matrícula.

Eso era cierto hace algunos años.

Los sistemas modernos funcionan de manera muy distinta.

El OCR es solo una pequeña parte del pipeline.

Detrás existe un conjunto de modelos de visión artificial capaces de extraer decenas de atributos del vehículo en apenas unos milisegundos.

Entre ellos:

* patente
* marca
* modelo
* color
* tipo de carrocería
* dirección del desplazamiento
* timestamp exacto
* nivel de confianza de cada detección

Algunos modelos incluso generan un *embedding* visual del automóvil, permitiendo localizar el mismo vehículo aunque la patente no sea completamente legible.

En otras palabras, ya no se busca únicamente una matrícula.

Se busca un objeto dentro del mundo físico.

---

## La verdadera potencia está en la base de datos

Aquí aparece un detalle que muchas veces pasa desapercibido.

La inteligencia artificial no es la parte realmente poderosa.

Lo importante es lo que ocurre **después**.

Cada detección queda almacenada en una base de datos junto con sus metadatos.

Con suficientes cámaras distribuidas por una ciudad es posible responder consultas como:

> ¿Dónde apareció este vehículo durante el último mes?

o

> Muéstrame todos los SUV blancos que pasaron entre las 2 y las 3 de la madrugada.

Desde el punto de vista de ingeniería es fascinante.

Desde el punto de vista de la privacidad... bastante menos.

---

## La diferencia entre observar y vigilar

Existe un argumento muy común.

*"Las patentes son públicas. Cualquiera puede verlas."*

Es cierto.

Pero hay una enorme diferencia entre que una persona vea pasar un automóvil y que una red de miles de cámaras registre automáticamente cada uno de sus desplazamientos durante meses.

El problema no es la información.

Es la escala.

Una persona olvida.

Una base de datos no.

Una persona no puede recordar todos los vehículos que vio hace tres meses.

Un sistema distribuido sí.

Y puede hacerlo en menos de un segundo.

---

## Como ingeniero, entiendo perfectamente por qué funciona

Si tuviera que construir un sistema similar probablemente utilizaría una arquitectura bastante clásica.

* cámaras IP
* inferencia con YOLO para detectar vehículos
* OCR con PaddleOCR o EasyOCR
* seguimiento mediante DeepSORT o ByteTrack
* almacenamiento en PostgreSQL o Elasticsearch
* búsquedas por atributos mediante índices

No es magia.

Es una combinación muy bien ejecutada de visión artificial, machine learning e infraestructura.

De hecho, hace un tiempo pensé en desarrollar un proyecto parecido para la entrada de mi casa.

No para compartir información con terceros, sino para saber qué vehículos ingresan a mi propiedad y cuándo lo hacen.

Y ahí aparece una diferencia enorme.

---

## El contexto importa

No todas las implementaciones tienen las mismas implicaciones éticas.

Un sistema instalado en una vivienda que procesa todo localmente y elimina los registros después de algunos días es muy distinto a una red nacional conectada a miles de cámaras.

En el primer caso, el objetivo es proteger una propiedad.

En el segundo, es posible reconstruir los movimientos cotidianos de millones de personas.

La tecnología es prácticamente la misma.

El contexto cambia completamente el debate.

---

## El problema no es la IA

Cada vez que aparece una tecnología polémica suele repetirse la misma frase.

*"La inteligencia artificial es peligrosa."*

No estoy convencido de que ese sea el problema.

La IA no decide qué almacenar.

No decide durante cuánto tiempo conservar los datos.

Tampoco decide quién puede acceder a ellos.

Esas decisiones las toman personas.

Y ahí es donde empiezan las preguntas difíciles.

¿Qué ocurre si esa base de datos se filtra?

¿Qué ocurre si se utiliza con fines distintos para los que fue creada?

¿Qué ocurre cuando la infraestructura ya existe y alguien decide ampliar su uso?

La historia demuestra que la expansión de las capacidades tecnológicas suele ser mucho más rápida que la creación de regulaciones capaces de limitar su uso.

---

## El equilibrio que todavía no encontramos

No tengo dudas de que sistemas como Flock pueden ayudar a resolver delitos.

Sería absurdo negar ese beneficio.

Tampoco tengo dudas de que la misma infraestructura puede convertirse en uno de los sistemas de vigilancia más sofisticados jamás desplegados sobre ciudadanos que nunca fueron sospechosos de ningún delito.

Ese es el verdadero dilema.

No estamos discutiendo cámaras.

Estamos discutiendo el costo que estamos dispuestos a pagar por sentirnos más seguros.

Y quizás esa sea la pregunta más importante de todas.

Porque una vez que una sociedad acepta ser observada permanentemente, es muy difícil volver atrás.
