'use strict';

function BooksController(BookLoaderService) {
    var ctrlReference = this;

    const resolveHandler = function (books) {
        ctrlReference.books = books;
    };

    const rejectHandler = function (error) {
        ctrlReference.error = error;
    };

    ctrlReference.loadBooks = function () {
        BookLoaderService.loadBooks()
            .then(resolveHandler, rejectHandler);
    };

    ctrlReference.books = [];
}

angular.module('myApp.view1')
    .controller('BooksController', [
        'BookLoaderService',
        BooksController
    ]);