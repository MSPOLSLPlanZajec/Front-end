export default function ($resource) {
    return $resource('http://157.158.16.185:60454/groups', {}, { isArray: true });

    // return {
    //     get: function () {
    //         return App.mockPromise(App.mocks.group.get);
    //     }
    // }
}