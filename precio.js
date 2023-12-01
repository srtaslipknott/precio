function calcularPrecio() {
    var tipoSeguro = document.getElementById("tipoSeguro").value;
    var precio = 0;

    switch (tipoSeguro) {
        case "basico":
            precio = 500;
            break;
        case "intermedio":
            precio = 1000;
            break;
        case "premium":
            precio = 1500;
            break;
        default:
            precio = 0;
    }

    document.getElementById("precio").innerText = "Precio: $" + precio;
}