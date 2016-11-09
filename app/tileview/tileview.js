(function () {
    'use strict';

    angular
            .module('app')
            .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider) {
                    $stateProvider
                            .state('tileview', {
                                url: '/tile',
                                views: {
                                    content: {templateUrl: 'app/tileview/tileview.html'}
                                }
                            });
                }]);
}());
