(function () {
    'use strict';

    angular.module('BlurAdmin.pages.notify', [
            'BlurAdmin.pages.notify.prayerTimesChange',
            'BlurAdmin.pages.notify.announcements',
            'BlurAdmin.pages.notify.events',
            'BlurAdmin.pages.notify.janazah',
        ])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('notify', {
                url: '/notify',
                templateUrl: 'app/pages/notify/notify.html',
                title: 'Notify',
                sidebarMeta: {
                    icon: 'fa fa fa-bell-o',
                    order: 1,
                },
            });
    }

})();

