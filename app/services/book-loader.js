'use strict';

function BookLoaderService($http) {

    function onSuccess(response) {
        return response.data.books;
    }

    function onError(err) {
        return 'Error on loading books. Error message: ' + err;
    }

    function loadBooks() {
        return $http.get("/books")
            .then(onSuccess, onError);
    }

    return {
        loadBooks: loadBooks
    };
}

angular.module('myApp.view1')
    .factory('BookLoaderService', [
        '$http',
        BookLoaderService
    ]);