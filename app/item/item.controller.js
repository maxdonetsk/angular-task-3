(function () {
    'use strict';

    angular
            .module('app')
            .controller('ItemController', ItemController);

    function ItemController($scope, $state, $stateParams, $uibModal, Items, localStorageService) {
        var vm = this;
        var items = [];
        var itemById = {};

        vm.header = '';
        vm.item = {};
        vm.onDelete = onDelete;
        vm.onSubmit = onSubmit;
        vm.onReset = onReset;
        vm.onCancel = onCancel;

        if (!!$stateParams.id) {
            if (localStorageService.isSupported && !!localStorageService.get('items')) {
                items = localStorageService.get('items');
            } else {
                items = Items.getAllDummy();
            }

            itemById = _.find(items, {id: parseInt($stateParams.id)});

            vm.item = angular.copy(itemById);
            vm.header = 'Edit item';
        } else {
            vm.header = 'Create a new item';
        }

        watchForChanges();

        function onDelete() {
            vm.deleteModal = $uibModal.open({
                templateUrl: 'app/item/delete.modal.template.html',
                windowClass: 'ms-modal-danger',
                controller: ItemController,
                controllerAs: 'vm',
                size: 'sm'
            });
            vm.deleteModal.result.then(function () {
                _.pullAllBy(items, [{id: parseInt(vm.item.id)}], 'id');
                localStorageService.set('items', items);
                goDefaultState();
            });
        }

        function onSubmit(form) {
            if (form.$valid) {
                goDefaultState();
            }
        }

        function onReset() {
            if (!!$stateParams.id && !!items) {
                vm.item = angular.copy(items[$stateParams.id - 1]);
            } else {
                vm.item = {};
            }
            watchForChanges();
            vm.isDisabled = true;
        }

        function onCancel() {
            goDefaultState();
        }

        function goDefaultState() {
            $state.go('table');
        }

        function watchForChanges() {
            $scope.$watchCollection('vm.item', function (newValues, oldValues) {
                vm.isDisabled = (newValues === oldValues) ? true : false;
            });
        }
    }
}());