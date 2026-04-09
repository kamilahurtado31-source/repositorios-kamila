 function converirTemperatura(valor, unidadOrigen, unidadDestino) {
    // Validar
    if (typeof valor !== "number" || !isFinite(valor)) {
        return "Valor no válido. Debe ser un número válido.";
    }

    const unidadesValidas = ["C", "F", "K"];
    if (!unidadesValidas.includes(unidadOrigen) || !unidadesValidas.includes(unidadDestino)) {
        return "Unidad no válida. Las unidades válidas son: C, F, K.";
    }

    // Convertir a Celsius
    let valorCelsius;
    switch (unidadOrigen) {
        case "C":
            valorCelsius = valor;
            break;
        case "F":
            valorCelsius = (valor - 32) * 5 / 9;
            break;
        case "K":
            valorCelsius = valor - 273.15;
            break;
    }

    // Convertir de Celsius a unidad destino
    let valorDestino;
    switch (unidadDestino) {
        case "C":
            valorDestino = valorCelsius;
            break;
        case "F":
            valorDestino = (valorCelsius * 9 / 5) + 32;
            break;
        case "K":
            valorDestino = valorCelsius + 273.15;
            break;
    }

    return valorDestino;
}

// Ejemplo de uso
console.log(converirTemperatura(100, "C", "F")); 
console.log(converirTemperatura(32, "F", "C")); 
console.log(converirTemperatura(0, "K", "C"));  

 function converirLongitud(valor, unidadOrigen, unidadDestino) {
    // Validar
    if (typeof valor !== "number" || !isFinite(valor)) {
        return "Valor no válido. Debe ser un número válido.";
    }

    const unidadesValidas = ["m", "cm", "mm", "km"];
    if (!unidadesValidas.includes(unidadOrigen) || !unidadesValidas.includes(unidadDestino)) {
        return "Unidad no válida. Las unidades válidas son: m, cm, mm, km.";
    }

    // Convertir a metros
    let valorMetros;
    switch (unidadOrigen) {
        case "m":
            valorMetros = valor;
            break;
        case "cm":
            valorMetros = valor / 100;
            break;
        case "mm":
            valorMetros = valor / 1000;
            break;
        case "km":
            valorMetros = valor * 1000;
            break;
    }

    // Convertir de metros a unidad destino
    let valorDestino;
    switch (unidadDestino) {
        case "m":
            valorDestino = valorMetros;
            break;
        case "cm":
            valorDestino = valorMetros * 100;
            break;
        case "mm":
            valorDestino = valorMetros * 1000;
            break;
        case "km":
            valorDestino = valorMetros / 1000;
            break;
    }

    return valorDestino;
}

// Ejemplo de uso
console.log(converirLongitud(1, "km", "m")); 
console.log(converirLongitud(100, "cm", "m")); 
console.log(converirLongitud(500, "mm", "cm")); 


 function converirPeso(valor, unidadOrigen, unidadDestino) {
    // Validar
    if (typeof valor !== "number" || !isFinite(valor)) {
        return "Valor no válido. Debe ser un número válido.";
    }

    const unidadesValidas = ["kg", "g", "mg", "lb"];
    if (!unidadesValidas.includes(unidadOrigen) || !unidadesValidas.includes(unidadDestino)) {
        return "Unidad no válida. Las unidades válidas son: kg, g, mg, lb.";
    }

    // Convertir a kilogramos
    let valorKg;
    switch (unidadOrigen) {
        case "kg":
            valorKg = valor;
            break;
        case "g":
            valorKg = valor / 1000;
            break;
        case "mg":
            valorKg = valor / 1e6;
            break;
        case "lb":
            valorKg = valor * 0.453592;
            break;
    }

    // Convertir de kilogramos a unidad destino
    let valorDestino;
    switch (unidadDestino) {
        case "kg":
            valorDestino = valorKg;
            break;
        case "g":
            valorDestino = valorKg * 1000;
            break;
        case "mg":
            valorDestino = valorKg * 1e6;
            break;
        case "lb":
            valorDestino = valorKg / 0.453592;
            break;
    }

    return valorDestino;
}

// Ejemplo de uso
console.log(converirPeso(1, "kg", "g")); 
console.log(converirPeso(500, "g", "kg")); 
console.log(converirPeso(2, "lb", "kg")); 


