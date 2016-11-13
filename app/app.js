(function () {
    'use strict';

    angular
            .module('app', [
                'ui.bootstrap',
                'ui.router',
                'angularUtils.directives.dirPagination',
                'ngFileUpload',
                'ui.bootstrap.showErrors',
                'LocalStorageModule'])
            .config(['$urlRouterProvider', function ($urlRouterProvider) {
                    $urlRouterProvider.otherwise('table');
                }])
            .config(function (paginationTemplateProvider) {
                paginationTemplateProvider.setPath('/bower_components/angularUtils-pagination/dirPagination.tpl.html');
            });
}());