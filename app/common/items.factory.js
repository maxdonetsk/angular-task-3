(function () {
    'use strict';

    angular
            .module('app')
            .factory('Items', ['$http', function ($http) {
                    function getAll() {
                        var items = [];
                        return $http.get('/data/items.json')
                                .success(function (response) {
                                    items = response;
                                    return items;
                                });
                    }

                    function getAllDummy() {
                        var items = [];
                        for (var i = 1; i < 501; i++) {
                            items.push({
                                id: i,
                                title: 'Item ' + i,
                                width: i * 8,
                                height: i * 4,
                                length: i * 7
                            });
                        }
                        return items;
                    }

                    return  {
                        getAll: getAll,
                        getAllDummy: getAllDummy
                    };
                }]);
})();