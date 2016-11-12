(function () {
    'use strict';

    angular
            .module('app')
            .config(['$stateProvider', function ($stateProvider) {
                    $stateProvider
                            .state('item', {
                                url: '/item/:id',
                                views: {
                                    content: {templateUrl: 'app/item/item.html'}
                                }
                            });
                }]);
}());
