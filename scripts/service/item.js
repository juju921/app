'use strict';
app.factory('cartItems', function ($rootScope, $log) {



    var item = function (isbn, title, price, cover, quantity) {
        this.setIsbn(isbn);
        this.setTitle(title);
        this.setPrice(price);
        this.cover = cover;
        this.setQuantity(quantity);

    };

    item.prototype.setIsbn = function (isbn) {
        if (isbn)  this._isbn = isbn;
        else {
            $log.error('A name must be provided');
        }
    };
    item.prototype.getIsbn = function () {
        return this._isbn;
    };


    item.prototype.setTitle = function (title) {
        if (title)  this._title = title;
        else {
            $log.error('A name must be provided');
        }
    };

    item.getTitle = function () {
        return this._title;
    };


    item.prototype.setPrice = function(price){
        if (price) {
            if (price <= 0) {
                $log.error('A price must be over 0');
            } else {
                this._price = (price);
            }
        } else {
            $log.error('A price must be provided');
        }
    };


    item.prototype.getPrice = function(){
        return this._price;
    };


    item.prototype.setQuantity = function(quantity, relative){
        if (quantity % 1 === 0){
            if (relative === true){
                this._quantity  += quantity;
            } else {
                this._quantity = quantity;
            }
            if (this._quantity < 1) this._quantity = 1;

        } else {
            this._quantity = 1;
            $log.info('Quantity must be an integer and was defaulted to 1');
        }

    };



    item.prototype.getQuantity = function(){
        return this._quantity;
    };

    item.prototype.getTotal = function () {
        var result = this.getQuantity() * this.getPrice();
        return result  ;

    };








    item.prototype.toObject = function() {
        return {

            price: this.getPrice(),
            quantity: this.getQuantity(),
            total: this.getTotal()
        }
    };


    return item;


})