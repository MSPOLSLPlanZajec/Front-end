export default async function ($scope, Classroom, Degree, Department, Faculty, Teacher, DataEditorSharedData) {
    loadData();
    $scope.loadData = loadData;
    window.logme = $scope.data;

    async function loadData() {
        DataEditorSharedData.downloadData();
        try {
            $scope.data = {
                classrooms: await Classroom.get().$promise,
                degrees: await Degree.query().$promise,
                departments: await Department.get().$promise,
                faculties: await Faculty.get().$promise,
                teachers: await Teacher.query().$promise
            }
            $scope.$apply();
                console.log("new Data");
        } catch (e) {
            console.log("Can't obtain data")
        }
    }
}