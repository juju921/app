'use strict';
app.factory('bookFactory', function ($q, $http, $timeout) {

    var factory = {
        books : false,
        getBooks: function () {

            var deferred = $q.defer();

            if(factory.books !== false) {
                deferred.resolve(factory.books);
            }
            else
            {
                $http.get('http://henri-potier.xebia.fr/books')
                    .success(function(data, status) {
                        factory.books = data;
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

