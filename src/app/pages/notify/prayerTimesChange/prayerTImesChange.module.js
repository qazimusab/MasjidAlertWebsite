/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.notify.prayerTimesChange', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('notify.prayerTimesChange', {
                url: '/prayerTimesChange',
                templateUrl: 'app/pages/notify/prayerTimesChange/prayer-times-change.html',
                title: 'Prayer Times Change',
                sidebarMeta: {
                    icon: 'ion-ios-pulse',
                    order: 0,
                },
            });
    }
})();