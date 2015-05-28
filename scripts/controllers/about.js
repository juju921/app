'use strict';

/**
 * @ngdoc function
 * @name henriPotierApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the henriPotierApp
 */
var app = angular.module('henriPotierApp')
app.controller('AboutCtrl',   function ($scope, bookFactory, cartItems, Panier, $rootScope, Offre) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];


    $scope.items = [];
    $scope.cartItems = cartItems;
    $scope.Panier = Panier;
    $scope.Offre = Offre;



    $scope.books = bookFactory.getBooks().then(function (books) {
        $scope.books = books;
    }, function (msg) {
        console.log(msg);
    }),






    function cartItem(isbn, title, price, cover, quantity
        ) {
        this.isbn = isbn;
        this.title = title;
        this.price = price * 1;
        this.cover = cover;
        this.quantity= quantity * 1;
    }







});
