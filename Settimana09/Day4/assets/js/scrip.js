"use strict";
class Abbigliamento {
    id;
    codprod;
    collection;
    article;
    model;
    quantity;
    color;
    excludedIvaPrice;
    includedIvaPrice;
    availability;
    sale;
    constructor(_id, _codprod, _collection, _article, _model, _quantity, _color, _excludedIvaPrice, _includedIvaPrice, _availability, _sale) {
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
    getArticleSale() {
        return (this.includedIvaPrice * this.sale) / 100;
    }
    ;
    getArticle() {
        return this.includedIvaPrice - this.getArticleSale();
    }
    ;
}
// let newArticle = new Abbigliamento();
