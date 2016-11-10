(function () {
    'use strict';

    angular
            .module('app')
            .controller('CreateController', CreateController);

    function CreateController($state) {
        var vm = this;
        vm.state = $state;
    }
}());