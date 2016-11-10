(function () {
    'use strict';

    angular
            .module('app')
            .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider) {
                    $stateProvider
                            .state('create', {
                                url: '/create',
                                views: {
                                    content: {templateUrl: 'app/create/create.html'}
                                }
                            });
                }]);
}());
