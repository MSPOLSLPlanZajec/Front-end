export default function ($rootScope, $scope, $state) {
    var { isAuthenticated } = $rootScope;

    $scope.title = isAuthenticated() ? 'Menu' : 'Schedules';
    
    $scope.shouldShowSchedules = false;
    $scope.toggleSchedulesVisibility = () => $scope.shouldShowSchedules = !$scope.shouldShowSchedules;

    $scope.login = () => {
        $rootScope.isAuthenticated = () => true;
    }

    $scope.logout = () => {
        $rootScope.isAuthenticated = () => false;
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