export default function (AuthToken, $rootScope) {
    var isAuthenticated = sessionStorage.authToken;

    return {
        isAuthenticated: () => isAuthenticated,
        getToken: () => sessionStorage.authToken,
        login: ({ username, password }) => {
            AuthToken.post({ username, password })
                .then((data) => {
                    var { access_token } = data;
                    sessionStorage.authToken = access_token;
                    isAuthenticated = true;

                    $rootScope.$apply();
                });
        },
        logout: () => {
            sessionStorage.authToken = '';
            isAuthenticated = false;
        }
    }
}