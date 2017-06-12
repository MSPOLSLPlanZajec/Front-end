export default function ($rootScope, $scope, $state, Auth) {
    var { isAuthenticated } = $rootScope;
    
    $scope.shouldShowSchedules = false;
    $scope.toggleSchedulesVisibility = () => $scope.shouldShowSchedules = !$scope.shouldShowSchedules;

    $scope.login = () => {
        $state.go('login');
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