export default function ($rootScope, $scope, $state, Auth) {
    var { isAuthenticated } = $rootScope;
    
    $scope.shouldShowSchedules = false;
    $scope.toggleSchedulesVisibility = () => $scope.shouldShowSchedules = !$scope.shouldShowSchedules;

    $scope.login = () => {
        var user = {
            username: 'admin',
            password: 'admin'
        };
        Auth.login(user);
    }

    $scope.logout = () => {
        Auth.logout();
        $state.go('home');
    }

    $rootScope.$on('$stateChangeSuccess', (e, toState) => {
        $scope.shouldShowSchedules = false;
        $scope.state = toState;
    });

    if (isAuthenticated()) {
        $scope.shouldShowSchedules = true;
    }
}