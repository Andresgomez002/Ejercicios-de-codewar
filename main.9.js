function rgb(r, g, b){
    r = Math.max(0, Math.min(255, Math.round(r)));
    g = Math.max(0, Math.min(255, Math.round(g)));
    b = Math.max(0, Math.min(255, Math.round(b)));
  
    // Convertir los valores a su representación hexadecimal de 2 dígitos
    const hexR = r.toString(16).padStart(2, '0').toUpperCase();
    const hexG = g.toString(16).padStart(2, '0').toUpperCase();
    const hexB = b.toString(16).padStart(2, '0').toUpperCase();
  
    // Concatenar los valores hexadecimales
    const hexadecimal = hexR + hexG + hexB;
  
    return hexadecimal;
  }
 
  console.log(rgb(255, 127.5, 63)); // Output: "ff7f3f"
  console.log(rgb(0, 300, 128));   // Output: "00ff80"
  console.log(rgb(45, 78, 200));    // Output: "2d4ec8"
  
  
  
  
  
  