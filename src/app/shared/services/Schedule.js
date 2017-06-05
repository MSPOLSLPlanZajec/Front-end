export default ($resource) => $resource(`${App.defaults.apiUrl}/schedule/:id/:type`);

// export default function () {
//     return {
//         get: function ({ id, type }) {
//             return App.mockPromise(App.mocks.schedule.get(type));
//         }
//     }
// }