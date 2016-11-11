(function () {
    'use strict';

    angular
            .module('app')
            .factory('ItemsPerPage', [function () {
                    function values() {
                        return [{
                                value: 10,
                                label: 10
                            }, {
                                value: 20,
                                label: 20
                            }, {
                                value: 50,
                                label: 50
                            }, {
                                value: 100,
                                label: 100
                            }, {
                                value: 9999999999999,
                                label: 'all'
                            }];
                    }

                    return  {
                        values: values
                    };
                }]);
})();