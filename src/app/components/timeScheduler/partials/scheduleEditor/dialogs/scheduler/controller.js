export default function ($scope, Command) {
    console.log($scope);

    $scope.submit = async () => {
        var { id } = $scope.course;
        var { day, startsAt } = $scope.suggestion;
        var { room } = $scope;

        var command = {
            type: 'select_start',
            data: { id, day, startsAt, room }
        };

        console.log(command);
        var commandResult = await Command.save(command).$promise;
        console.log(commandResult);
    }
}