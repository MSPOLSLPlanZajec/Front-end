export default function (Classroom, Degree, Department, Faculty, Teacher) {
    var data = null;

    var downloadData = async function(){
        try {
            data = {
                classrooms: await Classroom.query().$promise,
                degrees: await Degree.query().$promise,
                departments: await Department.get().$promise,
                faculties: await Faculty.get().$promise,
                teachers: await Teacher.query().$promise
            }
        } catch (e) {
            data = null;
        }
    }

    var getData = function() {
        return data;
    }

    return { downloadData, getData };
}