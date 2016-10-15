/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.notify.janazah', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('notify.janazah', {
                url: '/janazah',
                templateUrl: 'app/pages/notify/janazah/janazah.html',
                title: 'Janazah',
                sidebarMeta: {
                    icon: 'ion-ios-pulse',
                    order: 3,
                },
            });
    }
})();