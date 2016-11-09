(function () {
    'use strict';

    angular
            .module('app')
            .controller('TableviewController', TableviewController);

    function TableviewController($state) {
        var vm = this;
        vm.state = $state;
    }
}());