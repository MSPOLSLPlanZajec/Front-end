export default async function ($scope, FormUtils) {
    init();

    function init() {
        $scope.newGroupName = "";
    }

    $scope.addSubject = function () {
        $scope.semester.subjects.push({});
    }


    $scope.addGroup = function (groupName) {
        if (groupName.length < 1 || groupName.length > 45)
            FormUtils.showFailureToast("Nazwa grupy musi mieć 1-45 znaków", `#group-adder-${$scope.$id}`);
        else if (!groupNameAvailable(groupName))
            FormUtils.showFailureToast("Grupa o takiej nazwie juz istnieje", `#group-adder-${$scope.$id}`);
        else {
            $scope.semester.subgroups.push({
                name: groupName,
                subjects: [],
                subgroups: [],
                depth: 1
            });
        }
    }

    function groupNameAvailable(groupName) {
        var existingGroups = $scope.semester.subgroups;
        var numOfSameNameGroups = existingGroups.reduce(function (a, b) {
            return a + (b.name == groupName)
        }, 0);

        return numOfSameNameGroups == 0;
    }

}