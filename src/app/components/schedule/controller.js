export default async function ($scope, $stateParams, Schedule) {
    $scope.id = $stateParams.id;
    $scope.type = $stateParams.type;

    var { id, type } = $scope;

    $scope.schedule = await Schedule.get({ id, type }).$promise;
    console.log($scope.schedule);
    $scope.$apply();
}