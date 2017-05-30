import components from 'components';

module.exports = function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state(angular.extend({ name: 'home', url: '/' }, components.home))
        .state(angular.extend({ name: 'schedule', url: '/schedule/:id/:type' }, components.schedule))
        .state(angular.extend({ name: 'dataEditor', url: '/data-editor', authenticate: true }, components.dataEditor))
        .state(angular.extend({ name: 'timeScheduler', url: '/timeScheduler', authenticate: true }, components.timeScheduler))
        .state(angular.extend({ name: 'timeScheduler.edit', url: '/:id', authenticate: true }, components.timeScheduler))
        .state(angular.extend({ name: 'login', url: '/login' }, components.login));
}