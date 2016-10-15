/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.notify.events', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('notify.events', {
                url: '/events',
                templateUrl: 'app/pages/notify/events/events.html',
                title: 'Events',
                sidebarMeta: {
                    icon: 'ion-ios-pulse',
                    order: 2,
                },
            });
    }
})();