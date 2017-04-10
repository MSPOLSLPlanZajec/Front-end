export default function ($rootScope, $scope, $state) {
    $scope.shouldShowSchedules = false;
    
    $scope.showSchedules = () => $scope.shouldShowSchedules = true;

    $rootScope.$on('$stateChangeSuccess', (e, toState) => {
        $scope.shouldShowSchedules = false;
        $scope.state = toState;
    });
}