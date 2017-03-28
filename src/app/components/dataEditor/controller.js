export default async function ($scope, Classroom, Degree, Department, Faculty, Teacher) {
    loadData();

    async function loadData() {
        try {
            $scope.data = {
                classrooms: await Classroom.get().$promise,
                degrees: await Degree.get().$promise,
                departments: await Department.get().$promise,
                faculties: await Faculty.get().$promise,
                teachers: await Teacher.get().$promise
            }
            $scope.$apply();
        } catch (e) {
            console.log("Can't obtain data")
        }
    }
}