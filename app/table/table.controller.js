(function () {
    'use strict';

    angular
            .module('app')
            .controller('TableController', TableController);

    function TableController($state, Items, ItemsPerPage, localStorageService) {
        var vm = this;
        vm.currentPage = 1;
        vm.itemsPerPage = ItemsPerPage.values();
        vm.itemsPerPage.selected = vm.itemsPerPage[0];
        vm.goItem = goItem;

        if (localStorageService.isSupported && !!localStorageService.get('items')) {
            vm.items = localStorageService.get('items');
        } else {
            vm.items = Items.getAllDummy();
        }

        function goItem(id) {
            $state.go('item', {id: id});
        }
    }
}());