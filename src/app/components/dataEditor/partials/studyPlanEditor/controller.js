export default async function ($scope, StudyPlan, FormUtils) {

    $scope.studyPlan = {
        major: '',
        semesters: []
    }

    $scope.addSemester = function () {
        var semCount = $scope.studyPlan.semesters.length;
        var emptySemester = {
            name: `SEMESTR ${semCount + 1}`,
            subjects: [],
            subgroups: []
        };
        $scope.studyPlan.semesters.push(emptySemester)
    }

    $scope.addSubject = function (subjectArray) {
        var emptySubject = {
            name: '',
            teacher: $scope.data.teachers[0],
            duration: 6,
            type: $scope.subjTypes[0]
        };
        subjectArray.push(emptySubject);
    }

    $scope.submitStudyPlan = async function () {
        try {
            await StudyPlan.post($scope.selectedDepartment).$promise;
            FormUtils.showSuccessToast('Plan został zapisany', '#addNewStudyPlan');
        } catch (e) {
            FormUtils.showFailureToast('Nie udało się zapisać planu', '#addNewStudyPlan');
        }

        $scope.studyPlan = {
            major: '',
            semesters: []
        }
    }

    $scope.getStudyPlanReadyToSend = function(){
        var cleanMajor = (major) => {
            major = major.name;
            return major;
        }
        var cleanSubject = (subject) => {
            subject.teacher_id = subject.teacher.id;
            delete subject.teacher;
            subject.type = subject.type.value;
            return subject;
        }

        var cleanGroup = (group) => {
            group.subjects = group.subjects.map(s => cleanSubject(s))
            if(group.subgroups.length > 0)
                group.subgroups = group.subgroups.map(s => cleanGroup(s))
            return group;
        }

        var plan = JSON.parse(angular.toJson($scope.studyPlan));
        plan.major = cleanMajor(plan.major) 
        plan.semesters = plan.semesters.map(s => cleanGroup(s))
        return plan;
    }

    $scope.logStudyPlanReadyToSend = function () {
        console.log(angular.toJson($scope.getStudyPlanReadyToSend($scope.studyPlan), 3))
    }

    $scope.logStudyPlan = function () {
        console.log(angular.toJson($scope.studyPlan, 3))
    }
}