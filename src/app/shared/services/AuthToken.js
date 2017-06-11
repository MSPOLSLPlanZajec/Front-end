export default ($http) => {
    return {
        post: ({ username, password }) => {
            var body = `grant_type=password&username=${username}&password=${password}`;

            return fetch(`${App.defaults.apiUrl}/token`, { method: 'POST', body })
                .then((res) => res.json());
        }
    }
};