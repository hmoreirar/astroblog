---
title: "Inteligencia que no sube a la nube"
date: "2026-08-25"
tags: ["ia", "edge", "iot", "tecnologia"]
cover: ""
---

Cada vez más se habla de "Edge AI". La idea es simple: en vez de mandar todo a la nube para que un modelo enorme procese los datos, la inferencia ocurre en el dispositivo mismo.

---

## Qué es

Edge AI es ejecutar modelos de machine learning localmente: en un teléfono, una cámara, un microcontrolador o una placa como la ESP32.

No envías los datos a ningún servidor. El modelo vive donde está el dato.

---

## Por qué importa

- **Latencia**: la respuesta es inmediata, no depende de internet  
- **Privacidad**: los datos nunca salen del dispositivo  
- **Ancho de banda**: no mandas ni recibes masa de datos  
- **Offline**: funciona sin conexión

En una cámara de vigilancia, detectar un evento en el borde y solo enviar la alerta es mucho más eficiente que transmitir video constante a la nube.

---

## Ejemplos

- cámaras que detectan movimiento localmente  
- asistentes de voz en el teléfono  
- monitoreo ambiental que clasifica anomalías en el nodo  
- predicción de mantenimiento en sensores industriales

---

## Tradeoffs

- menos cómputo disponible: modelos más chicos  
- modelos que ocupan poco (TinyML, modelos cuantizados)  
- actualizaciones más difíciles que en un servidor  
- depuración y monitoreo más complicados

---

## Notas

Edge AI no reemplaza a la nube; la complementa.

Lo interesante es decidir qué hacer en el borde (lo urgente, lo privado, lo barato) y qué dejar en la nube (lo pesado, lo que requiere contexto global). El equilibrio es la parte de diseño.