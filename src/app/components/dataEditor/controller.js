export default async function ($scope, Classroom, Degree, Teacher) {
    loadData();
    $scope.loadData = loadData;

    async function loadData() {
        try {
            $scope.data = {
                classrooms: await Classroom.query().$promise,
                degrees: await Degree.query().$promise,
                teachers: await Teacher.query().$promise
            }
            $scope.$apply();
            console.log("Data obtained", $scope.data);
        } catch (e) {
            console.log("Can't obtain data", e, $scope.data)
        }
    }

    $scope.updateTeachers = async function() {
        try{
            $scope.data.teachers = await Teacher.query().$promise;
        } catch(e){
            console.log("Can't obtain teachers", e);
        }
    }
}