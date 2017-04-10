export default async function ($state, $scope, $mdDialog, Schedule, TimeSuggestion) {
    var { id } = $scope.teacher;

    $scope.schedule = await Schedule.get({ id, type: 'teacher' }).$promise;

    $scope.displaySuggestions = async (lesson) => {
        var { id } = lesson;
        var suggestions = await TimeSuggestion.get({ id }).$promise;

        $state.go('home');

        $mdDialog.hide();
    }
}