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
    this.sol1quote = alkemiquote;
    this.sol2quote = aparzeroquote;
    this.sol3quote = albatrossquote;
    this.sol4quote = arquitepiaquote;
    this.sol5quote = abitatquote;
    this.sol11quote = numberOfSprints;
    this.sol6quote = alephandriaquote;
  }
  quoteSolutions() {
    let quote =
      this.sol1quote +
      this.sol2quote +
      this.sol3quote +
      this.sol4quote +
      this.sol5quote * this.sol11quote +
      this.sol6quote +
      shipping;
    let finalQuote = quote + quote * tax;
    return finalQuote;
  }
}
