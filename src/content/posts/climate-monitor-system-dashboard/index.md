---
title: "Construyendo mi Climate Monitor System: ESP32 + Dashboard Web en Tiempo Real" 
date: "2026-05-13"
tags: ["ESP32", "IoT", "React", "Dashboard", "NodeJS", "Vercel", "Web Development"]
cover: ""
---

## Construyendo mi Climate Monitor System: ESP32 + Dashboard Web en Tiempo Real

Durante las últimas semanas estuve trabajando en un proyecto que mezcla IoT, desarrollo web y visualización de datos en tiempo real: un Climate Monitor System usando un ESP32 y un dashboard desplegado públicamente.

La idea nació de algo simple: quería construir un sistema capaz de medir variables ambientales y mostrarlas en una interfaz moderna, accesible desde cualquier lugar.

¿Qué hace el proyecto?

El sistema captura datos desde un ESP32 conectado a sensores ambientales y los envía a un backend que posteriormente alimenta un dashboard web.

Actualmente el proyecto permite:

Monitorear temperatura y humedad.
Visualizar datos en tiempo real.
Mostrar gráficos históricos.
Acceder al dashboard desde internet.
Actualizar automáticamente la información.
Manejar correctamente zonas horarias en Chile.

Más allá de los sensores, el objetivo real fue construir un flujo completo:

Hardware → Backend → API → Frontend → Deploy público

Stack utilizado
Hardware
ESP32
Sensores ambientales
WiFi para transmisión de datos
Backend
Node.js
API REST
Manejo de timestamps y almacenamiento
Frontend
React
Gráficos interactivos
Actualización en tiempo real
Diseño responsive
Deploy
Vercel
Dashboard público online
Uno de los problemas más interesantes: las zonas horarias

Uno de los detalles que más me hizo pensar fue el manejo de la hora.

El ESP32 estaba enviando timestamps en UTC, por lo que al visualizar los datos desde Chile aparecían varias horas adelantadas.

Esto abrió un problema mucho más interesante de lo que parece:

¿Qué pasa cuando cambia el horario de verano?
¿Cómo evitar hardcodear offsets manuales?
¿Cómo mantener consistencia entre frontend, backend y dispositivo?

La solución terminó siendo manejar correctamente la conversión de timezone desde el backend/frontend en lugar de depender del reloj local del microcontrolador.

Ese tipo de problemas son los que hacen que un proyecto pase de “demo” a algo mucho más serio.

El dashboard

Uno de los objetivos principales era que el dashboard se sintiera como una herramienta real y no solamente como una página mostrando números.

Se trabajó en:

Gráficos más amplios para visualizar hasta 24 horas.
Comparación de variaciones ambientales.
Mejor experiencia visual.
Actualización automática.
Interfaz limpia y moderna.

También fue una buena oportunidad para practicar visualización de datos y UX aplicada a dashboards.

Lo que más me gustó del proyecto

Este proyecto mezcla varias áreas que me interesan muchísimo:

Desarrollo web.
IoT.
Tiempo real.
Deploy y arquitectura.
Visualización de datos.
Integración hardware/software.

Además, me ayudó a entender mejor cómo construir proyectos completos que conectan dispositivos físicos con aplicaciones modernas en la web.

Próximas ideas

El proyecto todavía tiene mucho espacio para crecer.

Algunas ideas futuras:

Alertas automáticas.
Histórico avanzado.
Exportación de datos.
Múltiples sensores.
Sistema de usuarios.
Notificaciones.
Integración MQTT.
Predicciones usando machine learning.
Conclusión

Construir este Climate Monitor System fue mucho más que conectar sensores.

Fue una experiencia completa de desarrollo donde pude trabajar desde el hardware hasta el deploy final de una aplicación accesible públicamente.

Y honestamente, ese tipo de proyectos son los que más motivan: cuando puedes ver datos reales llegando desde un dispositivo físico a una plataforma construida por ti mismo.

Este es solo el comienzo.