export default async function ($scope, Classroom, Command, Department, FormUtils, DataEditorSharedData) {
    init();

    function init(){
        $scope.data = DataEditorSharedData.getData();
        if($scope.data){
            $scope.classrooms = $scope.data.classrooms;
            $scope.departments = $scope.data.departments;
            $scope.selectedClassroom = $scope.classrooms[0];
            $scope.newClassroom = { id: null };
        }

    }

    $scope.addClassroom = async function () {
        try {
            var command = {
                type: 'add_classroom',
                data: $scope.newClassroom
            };

            var classroom = await Command.save(command).$promise;

            FormUtils.showSuccessToast('Classroom added', '#addClassroomCard');
            updateClassroomEditor(classroom);
        } catch (e) {
            FormUtils.showFailureToast('Failed to add classroom', '#addClassroomCard');
        }
    }

    $scope.editClassroom = async function () {
        try {
            var command = {
                type: 'add_classroom',
                data: $scope.selectedClassroom
            };

            await Command.save(command).$promise;
            FormUtils.showSuccessToast('Classroom edited', '#editClassroomCard');
        } catch (e) {
            FormUtils.showFailureToast("Changes couldn't be saved", '#editClassroomCard');
        }
    }

    function updateClassroomEditor(newClassroom) {
        $scope.classrooms.push(newClassroom);
        FormUtils.clearForm($scope.addClassroomForm)
        $scope.newClassroom = { id: null };
    }
}