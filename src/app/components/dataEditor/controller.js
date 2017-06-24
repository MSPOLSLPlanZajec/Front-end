export default async function ($scope, Classroom, Degree, Teacher, LessonType) {
    loadData();
    $scope.loadData = loadData;

    async function loadData() {
        try {
            $scope.data = {
                classrooms: await Classroom.query().$promise,
                degrees: await Degree.query().$promise,
                teachers: await Teacher.query().$promise,
                lessonTypes: await LessonType.query().$promise
            }
            $scope.$apply();
            console.log("Data obtained", $scope.data);
        } catch (e) {
            console.log("Can't obtain data", e, $scope.data)
        }
    }
}