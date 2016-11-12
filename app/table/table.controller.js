(function () {
    'use strict';

    angular
            .module('app')
            .controller('TableController', TableController);

    function TableController(Items, ItemsPerPage) {
        var vm = this;
        vm.currentPage = 1;
        vm.itemsPerPage = ItemsPerPage.values();
        vm.itemsPerPage.selected = vm.itemsPerPage[0];
        vm.items = Items.getAllDummy();
        
    }
}());