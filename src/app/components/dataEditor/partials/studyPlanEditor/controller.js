export default async function ($scope, StudyPlan, FormUtils) {

    $scope.studyPlan = {
        major: '',
        semesters: []
    }

    $scope.addSemester = function () {
        var semCount = $scope.studyPlan.semesters.length;
        var semester = {
            name: `SEMESTER ${semCount + 1}`,
            subjects: [],
            subgroups: [],
            depth: 0
        };
        $scope.studyPlan.semesters.push(semester)
    }

    $scope.submitStudyPlan = async function () {
        try {
            await StudyPlan.post($scope.selectedDepartment).$promise;
            FormUtils.showSuccessToast('Plan added', '#addNewStudyPlan');
        } catch (e) {
            FormUtils.showFailureToast("Plan couldn't be added", '#addNewStudyPlan');
        }

        $scope.studyPlan = {
            major: '',
            semesters: []
        }
    }

    $scope.getStudyPlanReadyToSend = function () {
        var getImportantSubjectData = (subject) => {
            return {
                name: subject.name,
                teacher_id: subject.teacher.id,
                duration: subject.duration,
                type: subject.type.value
            }
        }

        var getImportantGroupData = (group) => {
            return {
                name: group.name,
                subjects: group.subjects.map(subj => getImportantSubjectData(subj)),
                subgroups: group.subgroups.map(subg => getImportantGroupData(subg))
            }
        }

        return {
            major: $scope.studyPlan.major,
            semesters: $scope.studyPlan.semesters.map(sem => getImportantGroupData(sem))
        }
    }

    $scope.logStudyPlanReadyToSend = function () {
        console.log(angular.toJson($scope.getStudyPlanReadyToSend($scope.studyPlan), 3))
    }

    $scope.logStudyPlan = function () {
        console.log(angular.toJson($scope.studyPlan, 3))
    }
}