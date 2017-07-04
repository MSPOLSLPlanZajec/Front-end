export default async function ($scope, $rootScope, Group) {
    $scope.active = {};
    
    $scope.groups = await Group.query().$promise;

    $scope.toggleGroup = function (groupName, index) {
        $scope.active[groupName] = $scope.active[groupName] !== index ? index : null;
    }

    $rootScope.$on('planAdded', async () => {
        $scope.groups = await Group.query().$promise;
        $scope.$apply();
    })

    $scope.$apply();
}