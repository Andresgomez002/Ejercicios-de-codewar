// El objetivo de este ejercicio es convertir una cadena en una nueva cadena donde cada carácter de la nueva cadena es "("si ese carácter aparece solo una vez en la cadena original, o ")"si ese carácter aparece más de una vez en la cadena original. Ignore las mayúsculas al determinar si un carácter es un duplicado.
function duplicateEncode(word){
    let separar = word.toLowerCase().split('');
    let newCadena = '';
    for (let i = 0; i < separar.length; i++) {
      let save = separar[i];
      if (separar.indexOf(save) === separar.lastIndexOf(save)) {
        newCadena += '(';
      } else {
        newCadena += ')';
      }
    }
    return newCadena;
      
      }