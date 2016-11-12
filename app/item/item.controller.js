(function () {
    'use strict';

    angular
            .module('app')
            .controller('ItemController', ItemController);

    function ItemController($stateParams, Items) {
        var vm = this;
        vm.header = '';
        vm.item = {};
        
        vm.header = $stateParams.id ? 'Edit item' : 'Create a new item';
        if (!!$stateParams.id) {
            var items = Items.getAllDummy();
            vm.item = items[$stateParams.id - 1];
            vm.header = 'Edit item';
        } else {
            vm.header = 'Create a new item';
        }
    }
}());