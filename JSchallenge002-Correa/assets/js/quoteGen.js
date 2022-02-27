class finalQuoter {
    constructor(nec2quote, alkemiquote, aparzeroquote, albatrossquote, arquitepiaquote, abitatquote, alephandriaquote) {
        this.metros2 = nec2quote;
        this.valorM2 = alkemiquote;
        this.zonaResidencia = aparzeroquote;
        this.metros2 = albatrossquote;
        this.valorM2 = arquitepiaquote;
        this.zonaResidencia = abitatquote;
        this.zonaResidencia = alephandriaquote;
    }
    cotizarPoliza() {
        let finalQuote = this.nec2quote + this.alkemiquote + this.aparzeroquote + this.albatrossquote + this.arquitepiaquote + this.abitatquote + this.alephandriaquote;
        return finalQuote;
    }
}