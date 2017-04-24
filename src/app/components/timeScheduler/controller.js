export default async function ($scope, $state, $stateParams, Teacher, Schedule) {
    $scope.teachers = [];
    $scope.id = $stateParams.id;
    
    var teachers = await Teacher.get().$promise;

    teachers.map(async (teacher) => {
        var { id } = teacher;
        teacher['schedule'] = await Schedule.get({ id, type: 'teacher' }).$promise;
        $scope.teachers.push(teacher);

        $scope.$apply();
    });

    $scope.queryTeachers = (query) => $scope.teachers.filter((x) => x.displayName.indexOf(query) !== -1);

    $scope.editTeacherSchedule = (teacher) => {
        if (!teacher) {
            return;
        }

        var { id } = teacher;

        $scope.id = id;
        $scope.teacher = teachers.filter((x) => x.id === $scope.id)[0];

        $scope.$broadcast('teacherChanged');

        $state.go('timeScheduler.edit', { id });
    }
}