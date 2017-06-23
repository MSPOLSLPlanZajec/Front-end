export default async function ($scope, $timeout, Degree, Command, Teacher, FormUtils) {
    init()

    async function init() {
        $scope.data = $scope.$parent.data;
        $scope.teachers = $scope.data.teachers;
        $scope.degrees = $scope.data.degrees;

        $scope.selectedTeacher = $scope.teachers[0];
        $scope.newTeacher = {};
    }

    $scope.editTeacher = async function () {
        var response = await POST($scope.selectedTeacher);
        showResponseInfo({ response: response, action: "edit" });
        console.log(response)
    }

    $scope.addTeacher = async function () {
        var response = await POST($scope.newTeacher);
        showResponseInfo({ response: response, action: "add" });
        console.log(response);
        if (response) {
            $scope.teachers.push({
                id: response.id,
                name: response.name,
                surname: response.surname,
                title: getDegreeTitle(response.title)
            });
            resetTeacherAdder();
        }
    }

    async function POST(rawTeacher) {
        try {
            var command = {
                type: 'add_teacher',
                data: getTeacherRadyToPOST(rawTeacher)
            };

            var response = await Command.save(command).$promise;
            return response;

        } catch (e) {
            console.log(e);
        }
    }

    function getDegreeId(degreeTitle) {
        return $scope.degrees.filter(d => d.title === degreeTitle)[0].id;
    }

    function getDegreeTitle(degreeId) {
        return $scope.degrees.filter(d => d.id === degreeId)[0].title;
    }

    function getTeacherRadyToPOST(teacher) {
        return {
            id: teacher.id,
            name: teacher.name,
            surname: teacher.surname,
            title: getDegreeId(teacher.title)
        }
    }

    function resetTeacherAdder() {
        FormUtils.clearForm($scope.addTeacherForm)
        $scope.newTeacher = {};
    }

    function showResponseInfo({ response, action }) {
        FormUtils.showToast({
            type: response ? "success" : "failure",
            msg: `${action} operation ${response ? "succeed" : "failed"}`,
            parentId: `#${action}TeacherCard`
        });
    }
}