const precioOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function ButtonPriceDiscount() {
  const inputPrice = document.getElementById('inputPrecio');
  const PriceValue = inputPrice.value;
  const inputDescuento = document.getElementById('inputDescuento');
  const DescuentoValue = inputDescuento.value;

  const precioConDescuento = calcularPrecioConDescuento(
    PriceValue,
    DescuentoValue
  );

  const ResultP = document.getElementById('ResultPrice');

  ResultP.innerText = 'El precio con descuento es: $' + precioConDescuento;
}
