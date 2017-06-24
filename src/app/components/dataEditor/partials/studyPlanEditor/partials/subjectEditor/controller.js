export default async function ($scope) {
    $scope.$watch('subject', value => init())

    function init() {
        $scope.data = $scope.$parent.data;
        $scope.teachers = $scope.data.teachers;
        $scope.degrees = $scope.data.degrees;
        $scope.subjTypes = $scope.data.lessonTypes.map(s => s.name);

        $scope.subjDurations = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

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

    $scope.emitDelete = function(){
        $scope.$emit('deleteSubject', $scope.subject);
    }
}