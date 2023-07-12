// Dada una matriz (arr) como argumento, complete la función countSmileysque debería devolver el número total de caras sonrientes.

// Reglas para una cara sonriente:

// Cada cara sonriente debe contener un par de ojos válidos. Los ojos se pueden marcar como :o;
// Una cara sonriente puede tener nariz, pero no necesariamente. Los caracteres válidos para una nariz son -o~
// Cada cara sonriente debe tener una boca sonriente que debe estar marcada con una )oD
// No se permiten caracteres adicionales a excepción de los mencionados.

// Ejemplos de caras sonrientes válidas: :) :D ;-D :~)
// Caras sonrientes no válidas: ;( :> :} :]
function countSmileys(arr) {
    let count = 0;
    const validEyes = [':', ';'];
    const validNoses = ['-', '~'];
    const validMouths = [')', 'D'];
  
    for (let i = 0; i < arr.length; i++) {
      const face = arr[i];
      if (face.length === 2) {
        if (validEyes.includes(face[0]) && validMouths.includes(face[1])) {
          count++;
        }
      } else if (face.length === 3) {
        if (
          validEyes.includes(face[0]) &&
          validNoses.includes(face[1]) &&
          validMouths.includes(face[2])
        ) {
          count++;
        }
      }
    }
  
    return count;
  }
  
  console.log(countSmileys([]));
  console.log(countSmileys([':D',':~)',';~D',':)']));
  console.log(countSmileys([':)',':(',':D',':O',':;']));
  console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));