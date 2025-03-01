document.getElementById('countButton').addEventListener('click', function() {
    const text = document.getElementById('inputText').value.trim();
    
    function Contador(frase) {
      const palabras = frase.split(" ").filter(palabra => palabra.length > 0);
      return palabras.length;
    }
  
    const Npalabras = Contador(text);
    document.getElementById('result').innerText = `Número de palabras: ${Npalabras}`;
  });
  