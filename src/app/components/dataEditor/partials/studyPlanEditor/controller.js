export default async function ($scope, StudyPlan, Command, FormUtils) {
    init()

    async function init(){
        $scope.data = $scope.$parent.data;
        $scope.teachers = $scope.data.teachers;
        $scope.degrees = $scope.data.degrees;

        $scope.studyPlan = {
            major: '',
            semesters: []
        }
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

    $scope.submitStudyPlan = async function(){
        var response = await POST($scope.studyPlan);
        showResponseInfo(response);
        console.log(response)

        if(response)
            resetStudyPlan();
    }

    async function POST(rawStudyPlan){
        try{
            var command = {
                type: 'add_study_plan',
                data: $scope.getStudyPlanReadyToSend(rawStudyPlan)
            }

            var response = await Command.save(command).$promise;
            return response;
        } catch (e){
            console.log(e);
        }
    }

    function showResponseInfo(response) {
        FormUtils.showToast({
            type: response ? "success" : "failure",
            msg: `operation ${response ? "succeed" : "failed"}`,
            parentId: `#addNewStudyPlan`
        });
    }

    $scope.getStudyPlanReadyToSend = function () {
        var getImportantSubjectData = (subject) => {
            return {
                name: subject.name,
                teacher_id: subject.teacher.id,
                duration: subject.duration,
                type: subject.type
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

    function resetStudyPlan(){
        $scope.studyPlan = {
            major: '',
            semesters: []
        }
    }

    $scope.logStudyPlanReadyToSend = function () {
        console.log(angular.toJson($scope.getStudyPlanReadyToSend($scope.studyPlan), 3))
    }

    $scope.logStudyPlan = function () {
        console.log(angular.toJson($scope.studyPlan, 3))
    }
}