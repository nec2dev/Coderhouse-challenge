let nec2Globalquote = "";
let nec2quote = 48000;
let nec2Flagquote = false;
let alkemiquote = 8000;
let aparzeroquote = 8000;
let albatrossquote = 8000;
let arquitepiaquote = 8000;
let abitatquote = 8000;
let alephandriaquote = 8000;
let numberOfSprints = 1;
let tax = 0;
let clientCountry = "ARG";
if (clientCountry=="ARG") 
tax = 0.21;
const dollarblue = 211;
const shipping = 290;


newClientQuote();

  class finalQuoter {
    constructor(nec2Pricequote, alkemiPricequote, aparzeroPricequote, albatrossPricequote, arquitepiaPricequote, abitatPricequote, numberPriceOfSprints, alephandriaPricequote) {
        this.sol0quote = nec2quote;
        this.sol1quote = alkemiquote;
        this.sol2quote = aparzeroquote;
        this.sol3quote = albatrossquote;
        this.sol4quote = arquitepiaquote;
        this.sol5quote = abitatquote;
        this.sol11quote =numberOfSprints;
        this.sol6quote = alephandriaquote;
    }
    quoteSolutions() {
        let quote = this.sol1quote + this.sol2quote + this.sol3quote + this.sol4quote + this.sol5quote*(this.sol11quote) + this.sol6quote + shipping;
        let finalQuote = quote + quote*tax;
        return finalQuote;
    }
}




function newClientQuote() {
    do {
      nec2Globalquote = prompt(
        "Desea realizar todas las etapas del desarrollo de su proyecto con nosotros?(precio promocional de $ 48.0000, no posee IVA ni gastos de envío). Conteste S o N"
      );
      if (nec2Globalquote == "S"){ 
        nec2quote = true;
        let quote = 48000 + shipping;
        let finalQuote = quote + quote*tax;
        return "El precio final con Impuestos y gastos de envío es de: $ " + finalQuote;
      }
      else if (nec2Globalquote == "N"){
        nec2quote = false;
        alkemiquote = parseFloat(prompt("Ingrese el valor de la solución 1"));
    aparzeroquote = parseFloat(prompt("Ingrese el valor de la solución 2"));
    albatrossquote = parseFloat(prompt("Ingrese el valor de la solución 3"));
    arquitepiaquote = parseFloat(prompt("Ingrese el valor de la solución 4"));
    abitatquote = parseFloat(prompt("Ingrese el valor de la solución 5"));
    alephandriaquote = parseFloat(prompt("Ingrese el valor de la solución 6"));
    const solutionsQuoter = new finalQuoter(
      nec2Flagquote,
      nec2quote,
      alkemiquote,
      aparzeroquote,
      albatrossquote,
      arquitepiaquote,
      abitatquote,
      numberOfSprints,
      alephandriaquote
    );
    let finalQuote = solutionsQuoter.quoteSolutions();
    alert("El precio final con Impuestos y gastos de envío es de: $ ");
    return finalQuote;
      }
      else 
        alert("No ha contestado correctamente, vuelva a intentar");      
    } while (nec2Globalquote != "S" && nec2Globalquote != "N");
  }
  