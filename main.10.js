// Hay una cola para las cajas de autopago en el supermercado. ¡Su tarea es escribir una función para calcular el tiempo total requerido para que todos los clientes paguen!

// aporte
// clientes: una matriz de enteros positivos que representan la cola. Cada número entero representa a un cliente, y su valor es la cantidad de tiempo que requieren para pagar.
// n: un entero positivo, el número de cajas registradoras.
// producción
// La función debe devolver un número entero, el tiempo total requerido.
function queueTime(customers, n) {
    let cajas = Array(n).fill(0);
    for (let i = 0; i < customers.length; i++) {
      let minTiempo = Math.min(...cajas);
      let minCajaIndex = cajas.indexOf(minTiempo);
      cajas[minCajaIndex] += customers[i];
    }
    let tiempoTotal = Math.max(...cajas);
  
    return tiempoTotal;
  }