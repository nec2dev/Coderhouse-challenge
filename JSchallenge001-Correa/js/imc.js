let cant = parseInt(
  prompt(
    "Vamos a calcular el índice de masa corporal de cada miembro de su familia, cuántos son en total?", ""
  )
);
let nombre;
let sexo;
let altura;
let peso;

for (let i = 1; i <= cant; i++) {
  nombre = prompt(
    "Indique el nombre del " + i + "° familiar:",
    ""
  );
  sexo = prompt(
    "Indique el sexo del " + i + "° familiar, una 'H' para hombre o una 'M' para mujer:",
    ""
  );
  altura = parseInt(prompt("Ahora, Indique su altura en centímetros:", ""));
  peso = parseInt(prompt("Ahora, Indique su peso en kilógramos:", ""));

  altura = Math.round(altura) / 100;
  peso = Math.round(peso);
  let indice = peso / Math.pow(altura, 2);
  let resultado = "";

  if (sexo == "m" || sexo == "M") {
    if (indice < 20) {
      resultado = "Peso inferior al normal.";
    } else if (indice >= 20 && indice < 24) {
      resultado = "Peso Normal.";
    } else if (indice >= 24 && indice < 29) {
      resultado = "Peso superior al normal.";
    } else {
      resultado = "Obesidad.";
    }
  }

  if (sexo == "h" || sexo == "H") {
    if (indice < 21) {
      resultado = "Peso inferior al normal.";
    } else if (indice >= 21 && indice < 25) {
      resultado = "Peso Normal.";
    } else if (indice >= 25 && indice < 30) {
      resultado = "Peso superior al normal.";
    } else {
      resultado = "Obesidad";
    }
  }

  alert( nombre + " mide " + altura / 100 + " metros y pesa " + peso + " Kg. El IMC de " + nombre + "es: " + indice.toFixed(2) + " y su clasificación es: " + resultado
  );
};

alert("Gracias por usar nuestra calculadora!");