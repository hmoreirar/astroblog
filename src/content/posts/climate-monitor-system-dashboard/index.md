---
title: "Construyendo mi Climate Monitor System: ESP32 + Dashboard Web en Tiempo Real" 
date: "2026-05-13"
tags: ["ESP32", "IoT", "React", "Dashboard", "NodeJS", "Vercel", "Web Development"]
cover: ""
---

## Construyendo mi Climate Monitor System: ESP32 + Dashboard Web en Tiempo Real

Durante las últimas semanas estuve construyendo un proyecto que junta varias cosas que me entusiasman mucho: hardware, datos en tiempo real y una interfaz web pública que realmente se siente útil.

La idea era simple sobre el papel: medir variables ambientales con un `ESP32` y mostrarlas en un dashboard moderno, accesible desde cualquier lugar. En la práctica, terminó convirtiéndose en un mini sistema completo, con varios puntos donde hardware y software tenían que hablar el mismo idioma.

> No quería solo "leer sensores". Quería construir una cadena completa: desde el dispositivo físico hasta una aplicación web pública y usable.

---

## Qué hace el sistema

El sistema captura datos desde un `ESP32` conectado a sensores ambientales, los envía a un backend y luego los transforma en visualizaciones accesibles desde la web.

Actualmente permite:

- monitorear temperatura y humedad
- visualizar datos en tiempo real
- mostrar gráficos históricos
- acceder al dashboard desde internet
- actualizar la información automáticamente
- manejar correctamente las zonas horarias en Chile

Más allá de la lectura de sensores, el objetivo real fue construir este flujo de punta a punta:

`Hardware → Backend → API → Frontend → Deploy público`

---

## Stack utilizado

### Hardware

- `ESP32`
- sensores ambientales
- conexión `WiFi` para transmisión de datos

### Backend

- `Node.js`
- API `REST`
- manejo de timestamps y almacenamiento

### Frontend

- `React`
- gráficos interactivos
- actualización en tiempo real
- diseño responsive

### Deploy

- `Vercel`
- dashboard público online

---

## El problema que parecía pequeño y no lo era

Uno de los detalles más interesantes del proyecto fue el manejo de la hora.

El `ESP32` estaba enviando timestamps en `UTC`, así que al mostrar los datos en Chile todo aparecía varias horas adelantado. Lo que parecía una corrección menor terminó abriendo preguntas bastante más serias:

- ¿qué pasa cuando cambia el horario de verano?
- ¿cómo evitar offsets hardcodeados?
- ¿cómo mantener consistencia entre dispositivo, backend y frontend?

La solución fue mover la inteligencia de conversión de zona horaria al backend y al frontend, en lugar de depender del reloj local del microcontrolador.

Ese tipo de detalle cambia completamente la naturaleza del proyecto: deja de ser una demo simpática y empieza a parecerse a una herramienta real.

---

## El dashboard

Uno de mis objetivos principales era que el dashboard no se sintiera como una página improvisada mostrando números, sino como una herramienta de monitoreo de verdad.

En esa parte trabajé especialmente en:

- gráficos más amplios para visualizar hasta 24 horas
- comparación de variaciones ambientales
- mejor experiencia visual
- actualización automática
- una interfaz limpia y moderna

También fue una muy buena oportunidad para practicar visualización de datos y UX aplicada a dashboards, no solo desde lo técnico, sino desde la lectura rápida de la información.

---

## Lo que más me gustó

Este proyecto mezcla varias áreas que me interesan muchísimo:

- desarrollo web
- IoT
- tiempo real
- deploy y arquitectura
- visualización de datos
- integración hardware/software

Además, me ayudó a entender mejor cómo diseñar proyectos completos, donde el valor no está solo en que algo funcione, sino en que cada capa del sistema tenga sentido junto con las demás.

---

## Próximas ideas

Todavía hay mucho espacio para seguir empujándolo. Algunas ideas que quiero explorar:

- alertas automáticas
- histórico más avanzado
- exportación de datos
- múltiples sensores
- sistema de usuarios
- notificaciones
- integración con `MQTT`
- predicciones usando machine learning

---

## Cierre

Construir este Climate Monitor System fue mucho más que conectar sensores.

Fue una experiencia completa de desarrollo donde pude moverme desde el hardware hasta el deploy final de una aplicación accesible públicamente.

Y, honestamente, ese tipo de proyectos son los que más motivan: cuando puedes ver datos reales viajando desde un dispositivo físico hasta una plataforma construida por ti mismo.

Esto recién empieza.
