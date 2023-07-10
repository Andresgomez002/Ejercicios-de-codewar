// La idea principal es contar todos los caracteres que aparecen en una cadena. Si tiene una cadena como aba, entonces el resultado debería ser {'a': 2, 'b': 1}.

// ¿Qué pasa si la cadena está vacía? Entonces el resultado debería ser un objeto literal vacío, {}.
function count(string) {
    let lista = string.split('')
    let repetidos = {};
    for(let i = 0; i <lista.length; i ++ ){
     if(repetidos[lista[i]]){
       repetidos[lista[i]] ++;
     }  else{
       repetidos[lista[i]] = 1
     }
    }
    return repetidos;
  }