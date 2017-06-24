export default async function ($scope, FormUtils) {
    init();

    function init() {
        $scope.newGroupName = "";
        $scope.data = $scope.$parent.data;
        $scope.teachers = $scope.data.teachers;
        $scope.degrees = $scope.data.degrees;
    }

    $scope.$on('deleteSubject', (event, subject) => {
        var delIndex = $scope.model.subjects.indexOf(subject);
        $scope.model.subjects.splice(delIndex, 1);
    });

    $scope.addSubject = function () {
        $scope.model.subjects.push({});
    }

    $scope.addGroup = function (groupName) {
        if (groupName.length < 1 || groupName.length > 45)
            FormUtils.showToast({ type: "failure", msg: "Group name should have 1-45 chars", parentId: `#group-adder-${$scope.$id}` });
        else if (!groupNameAvailable(groupName))
            FormUtils.showToast({ type: "failure", msg: "Group with same name exists", parentId: `#group-adder-${$scope.$id}` });
        else {
            $scope.model.subgroups.push({
                name: groupName,
                subjects: [],
                subgroups: [],
                depth: $scope.model.depth + 1
            });
        }

    }

    function getImportantData() {
        var data = {};
        data.subjects = $scope.model.subjects.map(subj => subj.getImportantData());
        data.subgroups = $scope.model.subgroups.map(subg => subg.getImportantData());
    }

    function groupNameAvailable(groupName) {
        var existingGroups = $scope.model.subgroups;
        var numOfSameNameGroups = existingGroups.reduce(function (a, b) {
            return a + (b.name == groupName)
        }, 0);

        return numOfSameNameGroups == 0;
    }

}