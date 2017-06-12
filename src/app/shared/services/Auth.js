export default function (AuthToken, $http, $q) {
    var isAuthenticated = sessionStorage.authToken;

    var setAuthHeader = () => {
        $http.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage.authToken}`;
    }

    setAuthHeader();

    return {
        isAuthenticated: () => isAuthenticated,
        getToken: () => sessionStorage.authToken,
        login: ({ username, password }) => {
            var deferred = $q.defer();
            AuthToken.post({ username, password })
                .then((data) => {
                    var { access_token } = data;

                    if (!access_token) {
                        deferred.reject();
                        return;
                    }

                    sessionStorage.authToken = access_token;
                    isAuthenticated = true;

                    setAuthHeader();
                    deferred.resolve();
                });

            return deferred.promise;
        },
        logout: () => {
            sessionStorage.authToken = '';
            isAuthenticated = false;
        }
    }
}