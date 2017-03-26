export default async function ($scope, Degree, Teacher, FormUtils) {
    reload();

    
    async function reload() {
            $scope.teachers = await Teacher.get().$promise;
            $scope.degrees = await Degree.get().$promise;
            $scope.$apply();

            $scope.selectedTeacher = $scope.teachers[0];
            $scope.selectedDegree = $scope.degrees[$scope.degrees.indexOf($scope.selectedTeacher.titles)];
            $scope.newTeacher = {};
    }

    $scope.addTeacher = function() {
        FormUtils.showSuccessToast('Nauczyciel dodany', '#addTeacherCard');
        FormUtils.clearForm($scope.addTeacherForm)
        reload();
    }

    $scope.editTeacher = function() {
        FormUtils.showSuccessToast('Zmiany zostały zapisane', '#editTeacherCard');
        reload();
    }
}