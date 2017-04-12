export default async function ($scope, DataEditorSharedData) {
    $scope.$watch('subject', value => init())

    $scope.subjTypes = [
        { value: 'lecture', showAs: "Wykład" },
        { value: 'laboratories', showAs: "Laboratoria" },
        { value: 'exercise', showAs: "ćwiczenia" }
    ];
    
    $scope.subjDurations = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    function init() {
        console.log("init" + "  " + $scope.$id)
        $scope.data = DataEditorSharedData.getData();
        $scope.subject.name = '';
        $scope.subject.teacher = $scope.data.teachers[0];
        $scope.subject.duration = 6;
        $scope.subject.type = $scope.subjTypes[0];
    }

    $scope.getDurationString = function (segmentCount) {
        var totalMinutes = segmentCount * 15;
        var hours = Math.floor(totalMinutes / 60);
        var minutes = totalMinutes % 60;

        return hours + ":" + (minutes > 9 ? minutes : "0" + minutes);
    }
}