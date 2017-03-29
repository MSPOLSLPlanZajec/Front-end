export default async function ($scope, Degree, Teacher, FormUtils) {
    $scope.$watch('data', value => init());

    function init() {
        $scope.teachers = $scope.data.teachers;
        $scope.degrees = $scope.data.degrees;
        $scope.selectedTeacher = $scope.teachers[0];
        $scope.newTeacher = {};
    }

    $scope.addTeacher = async function () {
        try {
            var teacher = await Teacher.post($scope.newTeacher).$promise;
            FormUtils.showSuccessToast('Nauczyciel dodany', '#addTeacherCard');
            updateTeacherEditor(teacher);
        } catch (e) {
            FormUtils.showFailureToast('Operacja nie powiodła się', '#addTeacherCard');
        }
    }

    $scope.editTeacher = async function () {
        try {
            await Teacher.post($scope.selectedTeacher).$promise;
            FormUtils.showSuccessToast('Zmiany zostały zapisane', '#editTeacherCard');
        } catch (e) {
            FormUtils.showFailureToast('Nie udało się zapisać zmian', '#editTeacherCard');
        }
    }

    function updateTeacherEditor(newTeacher) {
        $scope.teachers.push(newTeacher);
        FormUtils.clearForm($scope.addTeacherForm)
        $scope.newTeacher = { id: null };
    }
}