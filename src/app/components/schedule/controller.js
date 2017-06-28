export default async function ($scope, $stateParams, Schedule, Teacher) {
    $scope.id = $stateParams.id;
    $scope.type = $stateParams.type;

    var { id, type } = $scope;

    $scope.schedule = await Schedule.get({ id, type }).$promise;

    if (type === 'teacher') {
        delete $scope.schedule.name;
        let teachers = await Teacher.query().$promise;
        let teacher = teachers.filter(t => t.id === id)[0];
        teacher.displayName = `${teacher.title} ${teacher.name} ${teacher.surname}`;
        angular.extend($scope.schedule, teacher);
    }

    $scope.$apply();
}