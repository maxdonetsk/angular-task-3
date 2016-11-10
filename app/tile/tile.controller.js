(function () {
    'use strict';

    angular
            .module('app')
            .controller('TileController', TileController);

    function TileController(Items) {
        var vm = this;
        vm.items = [];

        Items.getAll()
                .then(function (response) {
                    vm.items = response.data;
                });
    }
}());