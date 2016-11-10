(function () {
    'use strict';

    angular
            .module('app')
            .config(['$stateProvider', function ($stateProvider) {
                    $stateProvider
                            .state('tile', {
                                url: '/tile',
                                views: {
                                    content: {templateUrl: 'app/tile/tile.html'}
                                }
                            });
                }]);
}());
