export default async function ($scope, Classroom, Department, FormUtils) {
    $scope.$watch('data', value => init());

    function init(){
        $scope.classrooms = $scope.data.classrooms;
        $scope.departments = $scope.data.departments;
        $scope.selectedClassroom = $scope.classrooms[0];
        $scope.newClassroom = { id: null };
    }

    $scope.addClassroom = async function () {
        try {
            var classroom = await Classroom.post($scope.newClassroom).$promise;
            FormUtils.showSuccessToast('Sala dodana', '#addClassroomCard');
            updateClassroomEditor(classroom);
        } catch (e) {
            FormUtils.showFailureToast('Operacja nie powiodła się', '#addClassroomCard');
        }
    }

    $scope.editClassroom = async function () {
        try {
            await Classroom.post($scope.selectedClassroom).$promise;
            FormUtils.showSuccessToast('Zmiany zostały zapisane', '#editClassroomCard');
        } catch (e) {
            FormUtils.showFailureToast('Nie udało się zapisać zmian', '#editClassroomCard');
        }
    }

    function updateClassroomEditor(newClassroom) {
        $scope.classrooms.push(newClassroom);
        FormUtils.clearForm($scope.addClassroomForm)
        $scope.newClassroom = { id: null };
    }
}