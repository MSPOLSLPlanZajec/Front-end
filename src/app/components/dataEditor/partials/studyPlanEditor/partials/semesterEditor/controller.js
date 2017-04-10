export default async function ($scope) {
    init();

    function init() {
        $scope.newGroupName = "";
    }

    $scope.addSubject = function () {
        $scope.semester.subjects.push({});
    }


    $scope.addGroup = function (groupName) {
        if (groupName.length >= 2 && groupName.length <= 45 && groupNameAvailable(groupName)) {
            $scope.semester.subgroups.push({
                name: groupName,
                subjects: [],
                subgroups: []
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