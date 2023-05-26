class Abbigliamento{
    id:number;
    codprod:number;
    collection:string;
    article:string;
    model:number;
    quantity:number;
    color:string;
    excludedIvaPrice:number;
    includedIvaPrice:number;
    availability:string;
    sale:number;

    constructor(_id:number, _codprod:number, _collection:string, _article:string, _model:number, _quantity:number, _color:string, _excludedIvaPrice:number, _includedIvaPrice:number, _availability:string, _sale:number) {

    this.id = _id;
    this.codprod = _codprod;
    this.collection = _collection;
    this.article = _article;
    this.model = _model;
    this.quantity = _quantity;
    this.color = _color;
    this.excludedIvaPrice = _excludedIvaPrice;
    this.includedIvaPrice = _includedIvaPrice;
    this.availability = _availability;
    this.sale = _sale;
}

getArticleSale():number {
    return (this.includedIvaPrice * this.sale) / 100;
};

getArticle():number {
    return this.includedIvaPrice - this.getArticleSale();
};

}

// let newArticle = new Abbigliamento();

