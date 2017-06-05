export default ($resource) => $resource(`${App.defaults.apiUrl}/teacher`);

// export default function () {
//     return {
//         get: function () {
//             return App.mockPromise(App.mocks.teacher.get);
//         },
//         post: function (teacher){
//             var response = JSON.parse(JSON.stringify(teacher));
//             response.id = "123"
//             return App.mockPromise(response);
//         }
//     }
// }