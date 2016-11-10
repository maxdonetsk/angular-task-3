(function () {
    'use strict';

    angular
            .module('app')
            .config(['$stateProvider', function ($stateProvider) {
                    $stateProvider
                            .state('table', {
                                url: '/table',
                                views: {
                                    content: {templateUrl: 'app/table/table.html'}
                                }
                            });
                }]);
}());
