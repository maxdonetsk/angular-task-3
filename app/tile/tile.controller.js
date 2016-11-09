(function () {
    'use strict';

    angular
            .module('app')
            .controller('TileviewController', TileviewController);

    function TileviewController($state) {
        var vm = this;
        vm.state = $state;
    }
}());