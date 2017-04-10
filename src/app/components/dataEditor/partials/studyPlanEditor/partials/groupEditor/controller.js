export default async function ($scope) {
    init();

    function init() {
        $scope.newGroupName = "";
    }

    $scope.addSubject = function () {
        $scope.subgroup.subjects.push({});
    }

    /* //TODO, resursion error, add name checking
    $scope.addSubGroup = function (groupName) {
        if (groupName.length >= 2 || groupName.length <= 45){
                        console.log($scope.subgroup)
            if($scope.subgroup.depth > 3)
                return
            $scope.subgroup.subgroups.push({
                name: groupName,
                subjects: [],
                subgroups: []
            });
        }
    } */
}