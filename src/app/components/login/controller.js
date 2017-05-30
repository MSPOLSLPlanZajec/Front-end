export default function ($scope, $rootScope, $state, AuthService, FormUtils) {
    $scope.loginData = {
        username: '',
        password: ''
    }

    $scope.authorize = async function(){
        try{
            await AuthService.authorize($scope.loginData);
            $rootScope.isAuthenticated = () => true;
            $state.go('home');
        } catch (e){
            console.log(e)
            FormUtils.showFailureToast("Invalid login data", "login-card");
        }
    }
}