(function () {
    'use strict';

    angular
            .module('app')
            .controller('TableController', TableController);

    function TableController($state, Items) {
        var vm = this;
        vm.state = $state;
        vm.items = [];

        Items.getAll()
                .then(function (response) {
                    vm.items = response.data;
                });
    }
}());