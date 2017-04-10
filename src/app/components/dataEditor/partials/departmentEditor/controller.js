export default async function ($scope, Department, FormUtils, DataEditorSharedData) {
    init();

    function init(){
        $scope.data = DataEditorSharedData.getData();
        if($scope.data){
            $scope.departments = $scope.data.departments;
            $scope.selectedDepartment = $scope.departments[0];
            $scope.newDepartment = { id: null };
        }
    }


    $scope.addDepartment = async function () {
        try {
            var department = await Department.post($scope.newDepartment).$promise;
            FormUtils.showSuccessToast('Wydział dodany', '#addDepartmentCard');
            updateDepartmentEditor(department);
        } catch (e) {
            FormUtils.showFailureToast('Nie udało się zapisać zmian', '#editDepartmentCard');
        }
    }

    $scope.editDepartment = async function () {
        try {
            await Department.post($scope.selectedDepartment).$promise;
            FormUtils.showSuccessToast('Zmiany zostały zapisane', '#editDepartmentCard');
        } catch (e) {
            FormUtils.showFailureToast('Nie udało się zapisać zmian', '#editDepartmentCard');
        }
    }

    function updateDepartmentEditor(newDepartment) {
        $scope.departments.push(newDepartment);
        FormUtils.clearForm($scope.addDepartmentForm)
        $scope.newDepartment = { id: null };
    }
}