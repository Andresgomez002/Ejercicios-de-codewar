// Escriba una función que tome una cadena de una o más palabras y devuelva la misma cadena, pero con las palabras de cinco o más letras invertidas (al igual que el nombre de este Kata). Las cadenas pasadas consistirán solo en letras y espacios. Los espacios se incluirán solo cuando haya más de una palabra presente.
function spinWords(string){
    //TODO Have fun :)
    let cadena = string.split(' ');
    for(let  i = 0;  i < cadena.length; i++){
        let palabra = cadena[i];
      if(palabra.length >=5){
       cadena[i] = palabra.split("").reverse().join("");
      }
    }
    return cadena.join(' ');
  }
  console.log(spinWords( "Hey fellow warriors" )); 
  console.log(spinWords( "This is a test"));
  console.log(spinWords( "This is another test" ));