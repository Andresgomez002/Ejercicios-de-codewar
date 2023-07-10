// En este kata, se requiere que, dada una cadena, reemplace cada letra con su posición en el alfabeto.

// Si algo en el texto no es una carta, ignóralo y no lo devuelvas.

// "a" = 1, "b" = 2, etc
function alphabetPosition(text) {
    var resultado = "";
  for (var i = 0; i < text.length; i++) {
    var letra = text[i];
    if (letra.match(/[a-zA-Z]/)) {
      var posicion = letra.toLowerCase().charCodeAt(0) - 96;
      resultado += posicion + " ";
    }
  }
  return resultado.trim();
}