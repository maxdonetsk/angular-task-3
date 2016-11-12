(function () {
    'use strict';

    angular
            .module('app')
            .controller('ItemController', ItemController);

    function ItemController($stateParams, Items) {
        var vm = this;
        var items = [];

        vm.header = '';
        vm.item = {};
        vm.itemInitial = {};
        vm.onCancel = onCancel;

        if (!!$stateParams.id) {
            items = Items.getAllDummy();
            vm.item = angular.copy(items[$stateParams.id - 1]);
            vm.header = 'Edit item';
        } else {
            vm.header = 'Create a new item';
        }

        function onCancel() {
            if (!!$stateParams.id && !!items) {
                vm.item = angular.copy(items[$stateParams.id - 1]);
            } else {
                vm.item = {};
            }
        }
    }
}());