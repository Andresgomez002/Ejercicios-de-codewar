// El Western Suburbs Croquet Club tiene dos categorías de membresía, Senior y Open. Les gustaría su ayuda con un formulario de solicitud que les dirá a los posibles miembros en qué categoría se colocarán.

// Para ser senior, un socio debe tener al menos 55 años y tener un hándicap superior a 7. En este club de croquet, los hándicap van de -2 a +26; cuanto mejor sea el jugador, menor será el hándicap.

// Aporte
// La entrada consistirá en una lista de pares. Cada par contiene información para un solo miembro potencial. La información consta de un número entero para la edad de la persona y un número entero para la discapacidad de la persona.

// Producción
// La salida consistirá en una lista de valores de cadena (en Haskell y C: Openo Senior) que indiquen si el miembro respectivo se colocará en la categoría senior o abierta.
function openOrSenior(data){
    let newList = [];
    for(let  i = 0; i < data.length; i++){
        if(data[i][0] > 54 && data[i][1] > 7){
          newList.push('Senior')
        }else{
          newList.push('Open')
        }
        
      
    }
    return newList;
  }