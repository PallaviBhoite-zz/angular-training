'use strict';

function BookSearchController($scope) {
    var defaultBookDetails = {
        name: "Clean Code",
        author: "Robert Martin",
        category: "Education"
    };

    function init() {
        $scope.booksWishlist = [];
        $scope.bookDetails = Object.assign({}, defaultBookDetails);
    }
    
    $scope.isInvalid =function (field) {
        return field.$dirty && field.$invalid;
    };

    $scope.reset = function() {
        $scope.bookDetails = Object.assign({}, defaultBookDetails);
    };

    $scope.submit = function() {
        $scope.booksWishlist.push(Object.assign({}, $scope.bookDetails));
    };

    $scope.isInvalidForm = function() {
      return $scope.booksForm.$dirty && $scope.booksForm.name.$dirty &&
        $scope.booksForm.name.$invalid || $scope.booksForm.author.$dirty &&
        $scope.booksForm.author.$invalid;
    };

    init();
}

angular.module('myApp.view2')
.controller('BookSearchCtrl', [
    '$scope',
    BookSearchController
]);