(function () {
    'use strict';

    angular
            .module('app')
            .controller('ItemController', ItemController);

    function ItemController($scope, $stateParams, Items) {
        var vm = this;
        var items = [];

        vm.header = '';
        vm.item = {};
        vm.onReset = onReset;

        if (!!$stateParams.id) {
            items = Items.getAllDummy();
            vm.item = angular.copy(items[$stateParams.id - 1]);
            vm.header = 'Edit item';
        } else {
            vm.header = 'Create a new item';
        }

        watchForChanges();

        function onReset() {
            if (!!$stateParams.id && !!items) {
                vm.item = angular.copy(items[$stateParams.id - 1]);
            } else {
                vm.item = {};
            }
            watchForChanges();
            vm.isResetDisabled = true;
        }

        function watchForChanges() {
            $scope.$watchCollection('vm.item', function (newValues, oldValues) {
                vm.isResetDisabled = (newValues === oldValues) ? true : false;
            });
        }
    }
}());