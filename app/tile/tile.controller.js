(function () {
    'use strict';

    angular
            .module('app')
            .controller('TileController', TileController);

    function TileController($state) {
        var vm = this;
        vm.state = $state;
    }
}());