'use strict';

var template =
    '<table>' +
    '<tbody>' +
    '<tr ng-repeat="book in books track by $index">' +
    '<td>{{book.name}}</td>' +
    '<td>{{book.category}}</td>' +
    '</tr>' +
    '</tbody>' +
    '</table>';

angular.module('myApp.view1')
    .directive('myDirective', function () {
        return {
            scope: {
                books: '='
            },
            template: template
        };
    });