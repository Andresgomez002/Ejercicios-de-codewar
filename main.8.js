// Dada una matriz (arr) como argumento, complete la función countSmileysque debería devolver el número total de caras sonrientes.

// Reglas para una cara sonriente:

// Cada cara sonriente debe contener un par de ojos válidos. Los ojos se pueden marcar como :o;
// Una cara sonriente puede tener nariz, pero no necesariamente. Los caracteres válidos para una nariz son -o~
// Cada cara sonriente debe tener una boca sonriente que debe estar marcada con una )oD
// No se permiten caracteres adicionales a excepción de los mencionados.

// Ejemplos de caras sonrientes válidas: :) :D ;-D :~)
// Caras sonrientes no válidas: ;( :> :} :]
function countSmileys(arr) {
    let contador = 0;
    for(let  i = 0;  i < arr.length; i++){
        
      if(arr[i]===':)' || arr[i] === ':D' || arr[i] === ';-D' || arr[i] === ':~)'|| arr[i] === ';~D'){
       
        contador++;
      }else if(arr[i] === ''){
        contador = 0;
      }
    }
    return contador;
  }
  console.log(countSmileys([]));
  console.log(countSmileys([':D',':~)',';~D',':)']));
  console.log(countSmileys([':)',':(',':D',':O',':;']));
  console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));