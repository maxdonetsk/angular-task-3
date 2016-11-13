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

        if (localStorageService.isSupported && !!localStorageService.get('items')) {
            items = localStorageService.get('items');
        } else {
            items = Items.getAllDummy();
        }
        itemById = _.find(items, {id: parseInt($stateParams.id)});
        vm.item = angular.copy(itemById);

        vm.header = (!!$stateParams.id) ? 'Edit item' : 'Create a new item';

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
                if (!!vm.item.id) {
                    var index = -1;
                    _.forEach(items, function (item, idx) {
                        if (_.isEqual(item.id, parseInt(vm.item.id))) {
                            index = idx;
                            return;
                        }
                    });
                    items[index] = {
                        id: parseInt(vm.item.id),
                        title: vm.item.title,
                        width: parseInt(vm.item.width),
                        height: parseInt(vm.item.height),
                        length: parseInt(vm.item.length)
                    };
                } else {
                    items.push({
                        id: parseInt(_.last(items).id) + 1,
                        title: vm.item.title,
                        width: parseInt(vm.item.width),
                        height: parseInt(vm.item.height),
                        length: parseInt(vm.item.length)
                    });
                }
                localStorageService.set('items', items);
                goDefaultState();
            }
        }

        function onReset() {
            if (!!$stateParams.id && !!items) {
                vm.item = angular.copy(itemById);
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