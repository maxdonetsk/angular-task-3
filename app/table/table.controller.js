(function () {
    'use strict';

    angular
            .module('app')
            .controller('TableController', TableController);

    function TableController(Items) {
        var vm = this;
        vm.items = [];

        Items.getAll()
                .then(function (response) {
                    vm.items = response.data;
                });
    }
}());