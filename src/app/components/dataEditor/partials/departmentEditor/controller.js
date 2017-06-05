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
            FormUtils.showSuccessToast('Department added', '#addDepartmentCard');
            updateDepartmentEditor(department);
        } catch (e) {
            FormUtils.showFailureToast('Failed to add department', '#editDepartmentCard');
        }
    }

    $scope.editDepartment = async function () {
        try {
            await Department.post($scope.selectedDepartment).$promise;
            FormUtils.showSuccessToast('Department edited', '#editDepartmentCard');
        } catch (e) {
            FormUtils.showFailureToast("Changes couldn't be saved", '#editDepartmentCard');
        }
    }

    function updateDepartmentEditor(newDepartment) {
        $scope.departments.push(newDepartment);
        FormUtils.clearForm($scope.addDepartmentForm)
        $scope.newDepartment = { id: null };
    }
}