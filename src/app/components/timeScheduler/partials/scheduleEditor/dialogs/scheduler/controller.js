export default function ($scope, $rootScope, Command, $mdDialog, $mdToast) {
    $scope.getDisplayName = (t) => t && `${t.title} ${t.name} ${t.surname}`;

    $scope.submit = async () => {
        var { id } = $scope.course;
        var { day, startsAt, startsAtTime } = $scope.suggestion;
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

        $rootScope.$emit('courseAssigned');
    }
}