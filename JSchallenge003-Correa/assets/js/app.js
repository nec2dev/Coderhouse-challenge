function newClientQuote() {
  do {
    nec2Globalquote = prompt(
      "Desea realizar todas las etapas del desarrollo de su proyecto con nosotros?(precio promocional de $ 48.0000, no posee IVA ni gastos de envío). Conteste S o N"
    );
    if (nec2Globalquote == "S") {
      nec2quote = true;
      let quote = 48000 + shipping;
      let finalQuote = quote + quote * tax;
      let toDollar = finalQuote / dollarblue;
      alert("Sub Total: $ 48000,00");
      alert("Impuestos: " + tax * 100 + "%");
      alert("Gastos de envío: $ " + shipping + ",00");
      alert(
        "El precio final con Impuestos y gastos de envío es de: $ " + finalQuote
      );
      alert("Su pago en pesos arg.: $ " + finalQuote);
      alert("Su pago en dólares: u$s " + toDollar.toFixed(2));
      alert("Muchas gracias por confiar en nosotros!");
      console.log(
        "Sub Total: $ 48000,00 \nImpuestos: " +
          tax * 100 +
          ",00 \nGastos de envío: $ " +
          shipping +
          ",00 \nEl precio final es de: $ " +
          finalQuote +
          "\nSu pago en pesos arg.: $ " +
          finalQuote +
          "\nSu pago en dólares: u$s " +
          toDollar.toFixed(2)
      );
    } else if (nec2Globalquote == "N") {
      nec2quote = false;
      alkemiFlagquote = prompt(
        "Alkemi-Financial analysis le ofrece un Financial Analysis Report con un costo de $ 8000,00. desea agregarlo a su carrito? Conteste S o N"
      );

      if (alkemiFlagquote == "S") {
        alkemiquote = 8000;
        approvedsolutions.push("alkemi");
      } else {
        alkemiquote = 0;
      }

      aparzeroFlagquote = prompt(
        "Apar-Zero-Almacén de diseño le ofrece un Corporate ID Report con un costo de $ 8000,00. desea agregarlo a su carrito? Conteste S o N"
      );

      if (aparzeroFlagquote == "S") {
        aparzeroquote = 8000;
        approvedsolutions.push("aparzero");
      } else {
        aparzeroquote = 0;
      }

      albatrossFlagquote = prompt(
        "Albatross-Marketing le ofrece un Creative Brief con un costo de $ 8000,00. desea agregarlo a su carrito? Conteste S o N"
      );

      if (albatrossFlagquote == "S") {
        albatrossquote = 8000;
        approvedsolutions.push("albatross");
      } else {
        albatrossquote = 0;
      }

      arquitepiaFlagquote = prompt(
        "Arquitepia-Structures & models le ofrece un Prototipo y un Informe de pruebas de usuario con un costo de $ 8000,00. desea agregarlo a su carrito? Conteste S o N"
      );

      if (arquitepiaFlagquote == "S") {
        arquitepiaquote = 8000;
        approvedsolutions.push("arquitepia");
      } else {
        arquitepiaquote = 0;
      }

      abitatFlagquote = prompt(
        "Abitat-Development community le ofrece el desarrollo del producto a un costo de $ 8000,00. desea agregarlo a su carrito? Conteste S o N"
      );

      if (abitatFlagquote == "S") {
        abitatquote = 8000;
        approvedsolutions.push("abitat");
      } else {
        abitatquote = 0;
      }

      numberOfSprints = parseFloat(
        prompt(
          "Ingrese la cantidad de Sprints que desea para el desarrollo de su proyecto"
        )
      );

      alephandriaFlagquote = prompt(
        "Alephandria-Sistemas de mejora continua le ofrece el live Dashboard a un costo de $ 8000,00. desea agregarlo a su carrito? Conteste S o N"
      );

      if (alephandriaFlagquote == "S") {
        alephandriaquote = 8000;
        approvedsolutions.push("alephandria");
      } else {
        alephandriaquote = 0;
      }

      searchAndDestroy();

      addSolution();

      const solutionsQuoter = new finalQuoter(
        alkemiquote,
        aparzeroquote,
        albatrossquote,
        arquitepiaquote,
        abitatquote,
        numberOfSprints,
        alephandriaquote
      );
      let quote =
        alkemiquote +
        aparzeroquote +
        albatrossquote +
        arquitepiaquote +
        abitatquote * numberOfSprints +
        alephandriaquote;
      let finalQuote = solutionsQuoter.quoteSolutions();
      let toDollar = finalQuote / dollarblue;
      alert("Sub Total: $ " + quote);
      alert("Impuestos: " + tax * 100 + "%");
      alert("Gastos de envío: $ " + shipping + ",00");
      alert(
        "El precio final con Impuestos y gastos de envío es de: $ " + finalQuote
      );
      alert("Su pago en pesos arg.: $ " + finalQuote);
      alert("Su pago en dólares: u$s " + toDollar.toFixed(2));
      alert("Muchas gracias por confiar en nosotros!");
      console.log(
        "Sub Total: $ " +
          quote +
          "\nImpuestos: " +
          tax * 100 +
          ",00 \nGastos de envío: $ " +
          shipping +
          ",00 \nEl precio final es de: $ " +
          finalQuote +
          "\nSu pago en pesos arg.: $ " +
          finalQuote +
          "\nSu pago en dólares: u$s " +
          toDollar.toFixed(2)
      );
      return finalQuote;
    } else alert("No ha contestado correctamente, vuelva a intentar");
  } while (nec2Globalquote != "S" && nec2Globalquote != "N");
}

function searchAndDestroy() {
  const destroyFlagSolution = prompt(
    "Actualmente ha seleccionado las siguientes soluciones: " +
    approvedsolutions +
      ". Desea quitar una solución de su proyecto? Conteste S o N:"
  );
  if (destroyFlagSolution == "S") {
    let destroySolution = prompt("Escriba la solución que desea quitar");
    const indexsolution = approvedsolutions.indexOf(destroySolution);
    if (indexsolution > -1) {
      approvedsolutions.splice(indexsolution, 1);
      alert("Su nuevo kit de soluciones se compone de: " + approvedsolutions);
    } else {
      alert(
        "No se ha modificado nada, no se encontró la solución ingresada: ",
        destroySolution
      );
    }
  } else {
    const newSolution = prompt(
      "Ingrese La nueva solución que usted proponga que desea agregar a las de su proyecto, nosotros nos comunicaremos comentándole el presupuesto detallado:"
    );
    const result = approvedsolutions.includes(newSolution);
    if (result) {
      alert(
        "La solución que ha intentado ingresar",
        newSolution,
        ", ya existe en su presupuesto."
      );
      return;
    } else {
      approvedsolutions.push(newSolution);
      alert(approvedsolutions);
      alert("ℹ️ ", newSolution, "la solución se agregó exitosamente.");
    }
  }
}

function addSolution() {}
newClientQuote();
