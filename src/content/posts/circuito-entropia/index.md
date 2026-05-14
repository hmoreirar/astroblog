---
title: "Circuito Entropía: Microcontroladores DIY"
date: "2026-04-28"
tags: ["tecnología", "DIY", "microcontroladores"]
cover: "./justincase.webp"
---

# Circuito Entropía

Construyendo circuitos con microcontroladores de forma artesanal y experimental.

## Materiales Necesarios (./justincase.webp)

- Arduino Uno o compatible
- Protoboard
- Cables puente
- Sensores resistivos

## El Código

```cpp
void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}
```

## Experimentación

La belleza del hardware DIY está en el error, en la entropía que emerge cuando las cosas no salen exactamente como esperábamos.
