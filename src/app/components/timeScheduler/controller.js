export default async function ($scope, $rootScope, $state, $q, $stateParams, Teacher, Schedule) {
    var teachers;
    $scope.id = $state.params.id;

    $scope.getDisplayName = (t) => t && `${t.title} ${t.name} ${t.surname}`;

    if ($scope.id) {
        var { id } = $scope;
        let teachers = await Teacher.query().$promise;
        var teacher = teachers.filter((x) => x.id === $scope.id)[0];
        teacher['schedule'] = await Schedule.get({ id, type: 'teacher' }).$promise;
        $scope.teacher = teacher;

        $scope.$apply();
    }

    var prepareTeachers = (teachers) => {
        var deferred = $q.defer();

        var recur = async (teacher, i) => {
            var { id } = teacher;
            teacher['schedule'] = await Schedule.get({ id, type: 'teacher' }).$promise;

            if (++i < teachers.length) {
                recur(teachers[i], i);
            } else {
                deferred.resolve(teachers);
            }
        }

        recur(teachers[0], 0);

        return deferred.promise;
    }

    $scope.queryTeachers = async (query) => {
        if (!teachers) {
            teachers = await Teacher.query().$promise;
            teachers = await prepareTeachers(teachers);
        }

        var filtered = teachers.filter((x) => $scope.getDisplayName(x)
            .toLowerCase()
            .indexOf(query
                .toLowerCase()
            ) !== -1 &&
            x.schedule.notScheduled.length
        );

        return filtered;
    }

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

    $rootScope.$on('courseAssigned', async () => {
        let { id } = $scope.teacher;
        $scope.teacher['schedule'] = await Schedule.get({ id, type: 'teacher' }).$promise; 
        
        $scope.$apply();
    });
}