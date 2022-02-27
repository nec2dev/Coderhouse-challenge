class finalQuoter {
    constructor(nec2quote, alkemiquote, aparzeroquote, albatrossquote, arquitepiaquote, abitatquote, alephandriaquote) {
        this.sol0quote = nec2quote;
        this.sol1quote = alkemiquote;
        this.sol2quote = aparzeroquote;
        this.sol3quote = albatrossquote;
        this.sol4quote = arquitepiaquote;
        this.sol5quote = abitatquote;
        this.sol6quote = alephandriaquote;
    }
    quoteSolutions() {
        let finalQuote = this.sol0quote + this.sol1quote + this.sol2quote + this.sol3quote + this.sol4quote + this.sol5quote + this.sol6quote;
        return finalQuote;
    }
}