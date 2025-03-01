document.getElementById('countButton').addEventListener('click', function() {
    const text = document.getElementById('inputText').value.trim();
    
    function contarPalabras(frase) {
      const palabras = frase.split(" ").filter(palabra => palabra.length > 0);
      return palabras.length;
    }
  
    const numPalabras = contarPalabras(text);
    document.getElementById('result').innerText = `Número de palabras: ${numPalabras}`;
  });
  