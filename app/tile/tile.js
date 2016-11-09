(function () {
    'use strict';

    angular
            .module('app')
            .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider) {
                    $stateProvider
                            .state('tile', {
                                url: '/tile',
                                views: {
                                    content: {templateUrl: 'app/tile/tile.html'}
                                }
                            });
                }]);
}());
