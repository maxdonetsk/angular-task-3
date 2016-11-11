(function () {
    'use strict';

    angular
            .module('app')
            .controller('TileController', TileController);

    function TileController(Items, ItemsPerPage) {
        var vm = this;
        vm.items = [];
        vm.itemsPerPage = ItemsPerPage.values();
        vm.itemsPerPage.selected = vm.itemsPerPage[0];
        vm.currentPage = 1;

        Items.getAllDummy()
                .then(function () {
                    for (var i = 1; i < 501; i++) {
                        vm.items.push({
                            id: i,
                            title: 'Item ' + i,
                            width: i * 8,
                            height: i * 4,
                            length: i * 7
                        });
                    }
                });
    }
}());