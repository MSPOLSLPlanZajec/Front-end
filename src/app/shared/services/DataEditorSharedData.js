export default async function () {
        get: function () {
            return {
                classrooms: await Classroom.get().$promise,
                degrees: await Degree.get().$promise,
                departments: await Department.get().$promise,
                faculties: await Faculty.get().$promise,
                teachers: await Teacher.get().$promise
            }
        },
        post: function (department){
            var response = JSON.parse(JSON.stringify(department));
            response.id = "123"
            return App.mockPromise(response);
        }
    }
}