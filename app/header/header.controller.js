(function () {
    'use strict';

    angular
            .module('app')
            .controller('HeaderController', HeaderController);

    function HeaderController($state) {
        var vm = this;
        vm.state = $state;
    }
}());