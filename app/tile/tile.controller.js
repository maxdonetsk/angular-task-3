(function () {
    'use strict';

    angular
            .module('app')
            .controller('TileController', TileController);

    function TileController(Items, ItemsPerPage) {
        var vm = this;
        vm.currentPage = 1;
        vm.itemsPerPage = ItemsPerPage.values();
        vm.itemsPerPage.selected = vm.itemsPerPage[0];
        vm.items = Items.getAllDummy();
    }
}());