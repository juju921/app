'use strict';
app.factory('Offre', function ($rootScope, $log, cartItems, Panier, $q, $http, $timeout) {

    this.cartItems = cartItems;
    this.Panier = Panier;
    console.log(Panier.pushIsbn(this.$monsibn));


    var factory = {
        books : false,
        getBooks: function () {

            var deferred = $q.defer();

            if(factory.books !== false) {
                deferred.resolve(factory.books);
            }
            else
            {
                $http.get(Panier.pushIsbn())

                    .success(function(data, status) {
                        factory.books = data.offers;
                        $timeout(function() {
                            deferred.resolve(factory.books);
                        }, 100)

                    })
                    .error(function(data, status) {
                        deferred.reject('Impossible de recuperer les livres')
                    });
            }
            return deferred.promise;


        }

    }
    return factory;


})