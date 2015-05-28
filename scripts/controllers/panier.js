'use strict';

/**
 * @ngdoc function
 * @name henriPotierApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the henriPotierApp
 */
angular.module('henriPotierApp')
    .controller('PanierCtrl', function ($scope, $rootScope, $http, bookFactory, cartItems, Panier, Offre) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.cartItems = cartItems;
        $scope.Panier = Panier;
        $scope.Offre = Offre;


        $scope.books = Offre.getBooks().then(function (books) {
            $scope.books = books;
        }, function (msg) {
            console.log(msg);
        });




        /*   $scope.url = $rootScope.monUrl.url;
           $scope.monisbn = $rootScope.monUrl.isbn;

           $scope.test = $rootScope.monUrl;
           console.log($scope.test);

           var urlparse = $scope.url;
           console.log($scope.url);
           $http({method: 'GET', url: urlparse})
               .success(function (data) {
                   $scope.monurls = data.offers; // response data
               })
               .error(function (data, status) {
                   $scope.monurls = "Couldn't load the list of Orders, error # " + status;
               });*/


    });
