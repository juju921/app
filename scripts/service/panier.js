'use strict';
app.service('Panier', function ($rootScope, $log, cartItems) {

    this.$cart = {
        items: [],
    };


    this.$monsibn = [];
    this.url = [];


    this.addItem = function (isbn, title, price, cover, quantity) {
        var inCart = this.getItemById(isbn);
        if (typeof inCart === 'object') {
            inCart.setQuantity(quantity, false);
        } else {
            var item = new cartItems(isbn, title, price, cover, quantity);
            this.$cart.items.push(item);

            this.saveItems(cartItems);

            this.pushIsbn(isbn);
        }

    };

    this.getItemById = function (itemId) {
        var items = this.getCadie().items;
        var build = false;

        angular.forEach(items, function (item) {
            if (item.getIsbn() === itemId) {
                build = item;
            }
        });
        return build;
    };


    this.pushIsbn = function (isbn) {
        this.$monsibn.push(isbn);
        var url = "http://henri-potier.xebia.fr/reduction/" + this.$monsibn + "/commercialOffers";
        return url;
    };

    this.getItems = function () {
        return this.getCadie().items;
    };


    this.getCadie = function () {
        return this.$cart;
    };


    this.total = function () {
        item.getIsbn();
    };


    // save items to local storage
    this.saveItems = function () {
        if (localStorage != null && JSON != null) {
            localStorage['moncadie' + "_items"] = JSON.stringify(this.$cart.items);
        }
    };


    this.toNumber = function (value) {
        value = value * 1;
        return isNaN(value) ? 0 : value;
    };

    this.getTotalItems = function () {
        var count = 0;
        var items = this.getItems();
        angular.forEach(items, function (item) {

            count += item.getQuantity();
        });
        return count;
    };


    this.getSubTotal = function () {
        var total = 0;
        var items = this.getCadie().items;
        angular.forEach(items, function (item) {

            total += item.getTotal();

        });
        return total;
    };




        this.toObject = function () {

            if (this.getItems().length === 0) return false;

            var items = [];
            angular.forEach(this.getItems(), function (item) {
                items.push(item.toObject());
            });

            return {
                subTotal: this.getSubTotal(),
                items: items
            }

        };


})