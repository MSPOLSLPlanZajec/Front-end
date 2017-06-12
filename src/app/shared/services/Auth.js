export default function (AuthToken, $rootScope, $http) {
    var isAuthenticated = sessionStorage.authToken;

    var setAuthHeader = () => {
        $http.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.authToken}`;
    }

    setAuthHeader();

    return {
        isAuthenticated: () => isAuthenticated,
        getToken: () => sessionStorage.authToken,
        login: ({ username, password }) => {
            AuthToken.post({ username, password })
                .then((data) => {
                    var { access_token } = data;
                    sessionStorage.authToken = access_token;
                    isAuthenticated = true;

                    setAuthHeader();

                    $rootScope.$apply();
                });
        },
        logout: () => {
            sessionStorage.authToken = '';
            isAuthenticated = false;
        }
    }
}