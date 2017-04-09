export default async function ($scope, Faculty, FormUtils, DataEditorSharedData) {
    $scope.$watch('data', value => init());

    function init() {
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
            FormUtils.showSuccessToast('Kierunek dodany', '#addFacultyCard');
            updateFacultyEditor(faculty);
        } catch (e) {
            FormUtils.showFailureToast('Nie udało się zapisać zmian', '#editFacultyCard');
        }
    }

    $scope.editFaculty = async function () {
        try {
            await Faculty.post($scope.selectedFaculty).$promise;
            FormUtils.showSuccessToast('Zmiany zostały zapisane', '#editFacultyCard');
        } catch (e) {
            FormUtils.showFailureToast('Nie udało się zapisać zmian', '#editFacultyCard');
        }
    }

    function updateFacultyEditor(newFaculty) {
        $scope.faculties.push(newFaculty);
        FormUtils.clearForm($scope.addFacultyForm)
        $scope.newFaculty = { id: null };
    }
}