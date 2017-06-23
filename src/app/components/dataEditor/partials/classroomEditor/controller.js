export default async function ($scope, Classroom, Command, FormUtils) {
    init();

    async function init() {
        $scope.data = $scope.$parent.data;
        $scope.classrooms = $scope.data.classrooms;

        $scope.selectedClassroom = $scope.classrooms[0];
        $scope.newClassroom = {};
    }

    $scope.editClassroom = async function () {
        var response = await POST($scope.selectedClassroom);
        showResponseInfo({ response: response, action: "edit" });
        console.log(response)
    }

    $scope.addClassroom = async function () {
        var response = await POST($scope.newClassroom);
        showResponseInfo({ response: response, action: "add" });
        console.log(response);
        if (response) {
            $scope.classrooms.push({
                id: response.id,
                name: response.name
            });
            resetClassroomAdder();
        }
    }

    async function POST(classroom){
        try {
            var command = {
                type: 'add_classroom',
                data: classroom
            }

            var response = await Command.save(command).$promise;
            return response;
        } catch (e){
            console.log(e);
        }
    }

    function resetClassroomAdder(){
        FormUtils.clearForm($scope.addClassroomForm)
        $scope.newClassroom = {};
    }

    function showResponseInfo({ response, action }) {
        FormUtils.showToast({
            type: response ? "success" : "failure",
            msg: `${action} operation ${response ? "succeed" : "failed"}`,
            parentId: `#${action}ClassroomCard`
        })
    }
}