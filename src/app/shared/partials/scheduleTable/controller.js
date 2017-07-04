export default function ($scope, $rootScope) {
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

    $scope.getDayName = (i) => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i];
    $scope.getDisplayName = (t) => t && `${t.title} ${t.name} ${t.surname}`;

    $scope.getItemPosition = (startsAt) => `${startsAt * unitHeight}px`;
    $scope.getItemHeight = (duration) => `${duration * unitHeight}px`;

    $scope.fullHeight = `${tenHours * unitHeight}px`;

    $scope.chooseSuggestion = (suggestion, day, startsAtIndex) => {
        const startsAt = getHours()[startsAtIndex]
            .format('H:mm');
        $rootScope.$emit('suggestionChosen', angular.extend(suggestion, { day, startsAt }));
    }
}