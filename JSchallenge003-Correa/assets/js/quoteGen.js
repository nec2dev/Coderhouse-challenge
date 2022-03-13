class finalQuoter {
  constructor(
    alkemiquote,
    aparzeroquote,
    albatrossquote,
    arquitepiaquote,
    abitatquote,
    numberOfSprints,
    alephandriaquote
  ) {
    this.alkemiquote = alkemiquote;
    this.aparzeroquote = aparzeroquote;
    this.albatrossquote = albatrossquote;
    this.arquitepiaquote = arquitepiaquote;
    this.abitatquote = abitatquote;
    this.numberOfSprints = numberOfSprints;
    this.alephandriaquote = alephandriaquote;
  }
  quoteSolutions() {
    let quote =
      this.alkemiquote +
      this.aparzeroquote +
      this.albatrossquote +
      this.arquitepiaquote +
      this.abitatquote * this.numberOfSprints +
      this.alephandriaquote +
      shipping;
    let finalQuote = quote + quote * tax;
    return finalQuote;
  }
}
