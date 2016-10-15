/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.notify.announcements', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('notify.announcements', {
                url: '/announcements',
                templateUrl: 'app/pages/notify/announcements/announcements.html',
                title: 'Announcements',
                sidebarMeta: {
                    icon: 'ion-ios-pulse',
                    order: 1,
                },
            });
    }
})();