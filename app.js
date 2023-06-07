// carrito de compras de 3 productos

const precioZapatos = 20000;
const precioCamisas = 35000;
const precioPantalones = 40000;
const listaPrecios = `
  Zapatos: ${precioZapatos}$
  Camisas: ${precioCamisas}$
  Pantalones:${precioPantalones}$`;
const mensajeSalida = "Muchas gracias por su visita lo esperamos pronto";
let gastoTotal = 0;

alert(
  `A continuación veras los productos disponibles y sus precios:${listaPrecios}`
);

compra();

// Función compra donde si la decisión es SI accedo para ingresar los productos a comprar y me dice el total que voy a gastar

function compra() {
  let decisión = decisiónCompra();
  if (decisión === "si") {
    for (let i = decisión; i === "si"; i = volveraComprar()) {
      let decisiónProd1 = compraSi(decisión);
      let gastoSubtotal =
        compraCamisas(decisiónProd1) +
        compraPantalones(decisiónProd1) +
        compraZapatos(decisiónProd1);
      gastoTotal += gastoSubtotal;
      console.log(gastoSubtotal);
    }
    alert(`Usted va a gastar un total de ${gastoTotal}$`);
    alert(mensajeSalida);
  } else if (decisión === "no" || decisión === null) {
    alert(mensajeSalida);
  } else if (decisión !== "no" && decisión !== "si") {
    alert("Usted ingreso un valor incorrecto por favor ingrese si o no");
    compra();
  }
  return decisión;
}

//Me devuelve la palabra Zapato o Pantalon O camisa para que después me sume el total

function compraSi(compras) {
  if (compras === "si") {
    let prodCompra = prompt(
      `Escriba exactamente el nombre del producto que desea comprar tal como se indica en la siguiente lista ${listaPrecios}`
    );
    if (
      prodCompra === "Zapatos" ||
      prodCompra === "Pantalones" ||
      prodCompra === "Camisas"
    ) {
      return prodCompra;
    } else {
      alert(
        "Por favor ingresa correctamente las palabras tal como se indica: Zapatos o Pantalones o Camisas"
      );
      return compraSi("si");
    }
  }
}

// Decisiones de si o no, si inicialmente quiero comrpar y si voy a agregar mas productos

function decisiónCompra() {
  let decisiónCompra = prompt("¿Desea comprar productos? Ingrese si o no");
  return decisiónCompra;
}

function volveraComprar() {
  let decisiónCompra = prompt("¿Desea agregar otro producto? Ingrese si o no");
  return decisiónCompra;
}

//Funciones de si eligo comprar el articulo me devuelva el precio

function compraZapatos(zapatos) {
  if (zapatos === "Zapatos") {
    let gasto1 = precioZapatos;
    return gasto1;
  } else {
    return 0;
  }
}
function compraCamisas(camisas) {
  if (camisas === "Camisas") {
    let gasto2 = precioCamisas;
    return gasto2;
  } else {
    return 0;
  }
}
function compraPantalones(pantalones) {
  if (pantalones === "Pantalones") {
    let gasto3 = precioPantalones;
    return gasto3;
  } else {
    return 0;
  }
}
