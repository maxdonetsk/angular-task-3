(function () {
    'use strict';

    angular
            .module('app')
            .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider) {
                    $stateProvider
                            .state('tableview', {
                                url: '/table',
                                views: {
                                    content: {templateUrl: 'app/tableview/tableview.html'}
                                }
                            });
                }]);
}());
