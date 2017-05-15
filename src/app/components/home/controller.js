export default async function ($scope, Group, Degree, Teacher) {
    $scope.groups = await Group.query().$promise;
    
    var degree = await Degree.get().$promise;
    console.log(degree);

    var teachers = await Teacher.get({ id: '', type: 'teacher' }).$promise;
    console.log(teachers);
}