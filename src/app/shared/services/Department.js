export default function () {
    return {
        get: function () {
            return App.mockPromise(App.mocks.department.get);
        },
        post: function (department){
            var response = JSON.parse(JSON.stringify(department));
            response.id = "123"
            return App.mockPromise(response);
        }
    }
}