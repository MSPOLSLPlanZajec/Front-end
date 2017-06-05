import lessonsListDialog from './dialogs/lessonsList';

export default async function ($scope, $rootScope, Teacher, $mdDialog) {
    $scope.teachers = await Teacher.query().$promise;

    $scope.openDialog = (teacher) => {
        var scope = $rootScope.$new();
        scope.teacher = teacher;
        $mdDialog.show(angular.extend(lessonsListDialog, { scope }));
    }
}