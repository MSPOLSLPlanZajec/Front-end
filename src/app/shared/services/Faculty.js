export default function () {
    return {
        get: function () {
            return App.mockPromise(App.mocks.faculty.get);
        },
        post: function (faculty){
            var response = JSON.parse(JSON.stringify(faculty));
            response.id = "123"
            return App.mockPromise(response);
        }
    }
}