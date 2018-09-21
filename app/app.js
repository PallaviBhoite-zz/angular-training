'use strict';

function loadTranslations($translateProvider) {
    $translateProvider.translations('en', {
        ENTER_BOOK_NAME: 'Enter book name',
        BOOK_NAME_REQUIRED_WARNING: 'I haven\'t read a book without name in my life.',
        ENTER_AUTHOR: 'Enter Author',
        AUTHOR_REQUIRED_WARNING: 'Author is required.',
        CATEGORY: 'Category'
    });
    $translateProvider.translations('fr', {
        ENTER_BOOK_NAME: 'FR: Enter book name',
        BOOK_NAME_REQUIRED_WARNING: 'FR: I haven\'t read a book without name in my life.',
        ENTER_AUTHOR: 'FR: Enter Author',
        AUTHOR_REQUIRED_WARNING: 'FR: Author is required.',
        CATEGORY: 'FR: Category'
    });

    $translateProvider.preferredLanguage('en');
}

angular.module('myApp', [
    'pascalprecht.translate',
    'ngRoute',
    'myApp.view1',
    'myApp.view2'
]).config(['$locationProvider', '$routeProvider', '$translateProvider',
    function ($locationProvider, $routeProvider, $translateProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/view1'});

        loadTranslations($translateProvider);
    }]);
