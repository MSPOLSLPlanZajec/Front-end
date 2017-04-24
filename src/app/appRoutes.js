import components from 'components';

module.exports = function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state(angular.extend({ name: 'home', url: '/' }, components.home))
        .state(angular.extend({ name: 'schedule', url: '/schedule/:id/:type' }, components.schedule))
        .state(angular.extend({ name: 'dataEditor', url: '/data-editor' }, components.dataEditor))
        .state(angular.extend({ name: 'timeScheduler', url: '/timeScheduler' }, components.timeScheduler))
        .state(angular.extend({ name: 'timeScheduler.edit', url: '/:id' }, components.timeScheduler));
}