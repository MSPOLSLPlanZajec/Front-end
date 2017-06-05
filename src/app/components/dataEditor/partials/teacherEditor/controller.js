export default async function ($scope, Degree, Teacher, FormUtils, DataEditorSharedData) {
    init()

    function init(){
        $scope.data = DataEditorSharedData.getData();
        if($scope.data){
            $scope.teachers = $scope.data.teachers;
            $scope.degrees = $scope.data.degrees;
            $scope.selectedTeacher = $scope.teachers[0];
            $scope.newTeacher = {};
        }
    }

    $scope.addTeacher = async function () {
        try {
            var teacher = await Teacher.post($scope.newTeacher).$promise;
            FormUtils.showSuccessToast('Teacher added', '#addTeacherCard');
            updateTeacherEditor(teacher);
        } catch (e) {
            FormUtils.showFailureToast("Teacher couldn't be added", '#addTeacherCard');
        }
    }

    $scope.editTeacher = async function () {
        try {
            await Teacher.post($scope.selectedTeacher).$promise;
            FormUtils.showSuccessToast('Teacher edited', '#editTeacherCard');
        } catch (e) {
            FormUtils.showFailureToast("Changes couldn't be saved", '#editTeacherCard');
        }
    }

    function updateTeacherEditor(newTeacher) {
        $scope.teachers.push({ 
            name: newTeacher.name,
            surname: newTeacher.surname,
            title: newTeacher.title, 
            id : newTeacher.id}
        );
        FormUtils.clearForm($scope.addTeacherForm)
        $scope.newTeacher = { id: null };
    }
}