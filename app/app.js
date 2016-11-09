(function () {
    'use strict';

    angular
            .module('app', ['ui.bootstrap', 'ui.router'])
            .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise('table');
                }]);
}());
