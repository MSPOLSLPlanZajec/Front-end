export default async function ($scope, Faculty, FormUtils, DataEditorSharedData) {
    init();

    function init(){
        $scope.data = DataEditorSharedData.getData();
        if($scope.data){
            $scope.faculties = $scope.data.faculties;
            $scope.selectedFaculty = $scope.faculties[0];
            $scope.newFaculty = { id: null };
        }
    }


    $scope.addFaculty = async function () {
        try {
            var faculty = await Faculty.post($scope.newFaculty).$promise;
            FormUtils.showSuccessToast('Faculty added', '#addFacultyCard');
            updateFacultyEditor(faculty);
        } catch (e) {
            FormUtils.showFailureToast('Failed to add faculty', '#editFacultyCard');
        }
    }

    $scope.editFaculty = async function () {
        try {
            await Faculty.post($scope.selectedFaculty).$promise;
            FormUtils.showSuccessToast('Faculty edited', '#editFacultyCard');
        } catch (e) {
            FormUtils.showFailureToast("Changes couldn't be saved", '#editFacultyCard');
        }
    }

    function updateFacultyEditor(newFaculty) {
        $scope.faculties.push(newFaculty);
        FormUtils.clearForm($scope.addFacultyForm)
        $scope.newFaculty = { id: null };
    }
}