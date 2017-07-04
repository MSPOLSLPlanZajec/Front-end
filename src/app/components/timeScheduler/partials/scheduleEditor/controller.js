import schedulerDialog from './dialogs/scheduler';

export default function ($scope, $mdDialog, $rootScope, TimeSuggestion) {
    $scope.showSuggestions = async (course) => {
        $scope.course = course;
        var { id } = course;
        $scope.suggestions = await TimeSuggestion.query({ id }).$promise;
        $scope.info = 'Click one of red rectangles to choose course start.'

        $scope.$apply();
    }

    $scope.$on('teacherChanged', () => $scope.suggestions = []);
    
    $rootScope.$on('suggestionChosen', (e, suggestion) => {
        $scope.suggestion = suggestion;
        $mdDialog.show(angular.extend(schedulerDialog, { scope : $scope, preserveScope: true }));
    });

    $rootScope.$on('courseAssigned', () => {
        $scope.suggestions = [];
    });
}