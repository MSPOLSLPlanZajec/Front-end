export default async function ($scope, Faculty, FormUtils) {
    init();

    

    function init() {
        $scope.subjDurations = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        $scope.subjTypes = [
            { value: 'lecture', showAs: "Wykład" },
            { value: 'laboratories', showAs: "Laboratoria" },
            { value: 'exercise', showAs: "ćwiczenia" }
        ];
        
        $scope.studyPlan = {
            major: '',
            semesters: []
        }
    }

    $scope.addSemester = function () {
        var semCount = $scope.studyPlan.semesters.length;
        var emptySemester = {
            name: `SEMESTR ${semCount + 1}`,
            subjects: [],
            subgroups: []
        };
        $scope.studyPlan.semesters.push(emptySemester)
    }

    $scope.addSubject = function (subjectArray) {
        var emptySubject = {
            name: '',
            teacher: $scope.data.teachers[0],
            duration: 6,
            type: $scope.subjTypes[0]
        };
        subjectArray.push(emptySubject);
    }

    $scope.getDurationString = function (segmentCount) {
        var totalMinutes = segmentCount * 15;
        var hours = Math.floor(totalMinutes / 60);
        var minutes = totalMinutes % 60;

        return hours + ":" + (minutes > 9 ? minutes : "0" + minutes);
    }
}