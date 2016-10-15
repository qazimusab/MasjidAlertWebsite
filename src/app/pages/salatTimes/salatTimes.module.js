(function () {
    'use strict';

    angular.module('BlurAdmin.pages.salatTimes', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('salatTimes', {
                url: '/salatTimes',
                templateUrl: 'app/pages/salatTimes/salat-times.html',
                title: 'Salat Times',
                sidebarMeta: {
                    icon : 'fa fa fa-bullhorn',
                    order: 0,
                },
            });
    }

})();