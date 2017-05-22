import schedulerDialog from './dialogs/scheduler';

export default function ($scope, $mdDialog, $rootScope, TimeSuggestion) {
    $scope.showSuggestions = async (course) => {
        $scope.course = course;
        var { id } = course;

        $scope.suggestions = await TimeSuggestion.get({ id }).$promise;
        $scope.$apply();
    }

    $scope.$on('teacherChanged', () => $scope.suggestions = []);

    $scope.$on('suggestionChosen', (e, suggestion) => {
        $scope.suggestion = suggestion;
        $mdDialog.show(angular.extend(schedulerDialog, { scope : $scope }));
    });
}