export default function ($rootScope, $state, Auth) {
    $rootScope.isAuthenticated = Auth.isAuthenticated;

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        // not authenticated
        if (toState.authenticate && !$rootScope.isAuthenticated()) {
            // User isn’t authenticated
            $state.transitionTo('home');
            event.preventDefault();
        }
    });
}