export default function () {
    return {
        get: function () {
            return App.mockPromise(App.mocks.classroom.get);
        },
        post: function (classroom){
            var response = JSON.parse(JSON.stringify(classroom));
            response.id = "123"
            return App.mockPromise(response);
        }
    }
}