export default async function ($scope, Group) {
    $scope.active = {};
    
    $scope.groups = await Group.query().$promise;
console.log($scope.groups)
    $scope.toggleGroup = function (groupName, index) {
        $scope.active[groupName] = $scope.active[groupName] !== index ? index : null;
    }

    $scope.$apply();
}