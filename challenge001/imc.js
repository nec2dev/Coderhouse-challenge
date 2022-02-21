function CalcularIMC(sexo, altura, peso) 
      {
        altura = Math.round(altura) / 100;
        peso = Math.round(peso);
        let indice = (peso / Math.pow(altura, 2));
        let resultado = "";
        switch (sexo)
        {
          case "m":
            if (indice < 20)
            {
              resultado = "Peso inferior al normal.";
            }
            else if (indice >= 20 && indice < 24)
            {
              resultado = "Peso Normal.";
            }
            else if (indice >= 24 && indice < 29)
            {
              resultado = "Peso superior al normal.";
            }
            else
            {
              resultado = "Obesidad.";
            }  
            break
          case "h":
            if (indice < 21)
            {
              resultado = "Peso inferior al normal.";
            }
            else if (indice >= 21 && indice < 25)
            {
              resultado = "Peso Normal.";
            }
            else if (indice >= 25 && indice < 30)
            {
              resultado = "Peso superior al normal.";
            }
            else
            {
              resultado = "Obesidad";
            }		   
            break
          default:
            resultado = "No se ha podido calcular. No ha indicado h (hombre) o m (mujer).";
        }
        return "Su IMC es: " + indice.toFixed(2) + " y su clasificación es: " + resultado;
      }

      