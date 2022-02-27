function newClientQuote() {
    nec2quote = parseFloat(prompt("Ingrese el valor de la solución 0"));
    alkemiquote = parseFloat(prompt("Ingrese el valor de la solución 1"));
    aparzeroquote = parseFloat(prompt("Ingrese el valor de la solución 2"));
    albatrossquote = parseFloat(prompt("Ingrese el valor de la solución 3"));
    arquitepiaquote = parseFloat(prompt("Ingrese el valor de la solución 4"));
    abitatquote = parseFloat(prompt("Ingrese el valor de la solución 5"));
    alephandriaquote = parseFloat(prompt("Ingrese el valor de la solución 6"));
    const solutionsQuoter = new finalQuoter(nec2quote, alkemiquote, aparzeroquote, albatrossquote, arquitepiaquote, abitatquote, alephandriaquote);
    resultFinalQuote = solutionsQuoter.quoteSolutions();
    console.log(resultFinalQuote);
}