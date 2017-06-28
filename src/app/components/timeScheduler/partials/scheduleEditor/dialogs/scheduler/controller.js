export default function ($scope, Command, $mdDialog, $mdToast) {
    $scope.submit = async () => {
        var { id } = $scope.course;
        var { day, startsAt } = $scope.suggestion;
        var { classroom } = $scope;

        var command = {
            type: 'select_start',
            data: { id, day, startsAt, classroom }
        };

        try {
            await Command.save(command).$promise;
        } catch (e) {
            $mdToast.show({
                template: '<md-toast>Error saving schedule!</md-toast>',
                position: 'top right'
            });
        }

        $mdDialog.hide();
    }
}