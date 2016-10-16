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
                controller: 'SalatTablesPageCtrl',
                title: 'Salat Times',
                sidebarMeta: {
                    icon : 'fa fa fa-bullhorn',
                    order: 0,
                },
            });
    }



    //function routeConfig($stateProvider, $urlRouterProvider) {
    //    $stateProvider
    //        .state('tables', {
    //            url: '/tables',
    //            template : '<ui-view></ui-view>',
    //            abstract: true,
    //            controller: 'TablesPageCtrl',
    //            title: 'Tables',
    //            sidebarMeta: {
    //                icon: 'ion-grid',
    //                order: 300,
    //            },
    //        }).state('tables.basic', {
    //        url: '/basic',
    //        templateUrl: 'app/pages/tables/basic/tables.html',
    //        title: 'Basic Tables',
    //        sidebarMeta: {
    //            order: 0,
    //        },
    //    }).state('tables.smart', {
    //        url: '/smart',
    //        templateUrl: 'app/pages/tables/smart/tables.html',
    //        title: 'Smart Tables',
    //        sidebarMeta: {
    //            order: 100,
    //        },
    //    });
    //    $urlRouterProvider.when('/tables','/tables/basic');
    //}


})();