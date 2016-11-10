(function () {
    'use strict';

    angular
            .module('app')
            .controller('TableController', TableController);

    function TableController($state) {
        var vm = this;
        vm.state = $state;
    }
}());