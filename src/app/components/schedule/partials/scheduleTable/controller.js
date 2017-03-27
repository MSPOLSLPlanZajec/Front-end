export default function ($scope) {
    var unitHeight = 15;
    var tenHours = 4 * 10;

    var getHours = () => {
        var hours = [];

        for (var i = 0; i < tenHours; i++) {
            var hour = moment($scope.baseTime).add(i * 15, 'minutes');
            hours.push(hour);
        }

        return hours;
    };

    $scope.baseTime = moment().hour(8).minute(30);

    $scope.hours = getHours();

    $scope.getDayName = (i) => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][i];

    $scope.getItemPosition = (startsAt) => `${startsAt * unitHeight}px`;
    $scope.getItemHeight = (duration) => `${duration * unitHeight}px`;

    $scope.fullHeight = `${tenHours * unitHeight}px`;
}