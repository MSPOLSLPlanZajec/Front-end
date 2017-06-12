export default function ($scope, $state, Auth) {
    $scope.authorize = async () => {
        $scope.error = '';

        try {
            var { username, password } = $scope;
            await Auth.login({ username, password });
            $state.go('home');
        } catch (e) {
            $scope.error = 'Incorrect username or password!';
        }

        $scope.$apply();
    }
}