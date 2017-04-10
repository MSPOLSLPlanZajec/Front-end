export default function () {
    return {
        get: function ({ id }) {
            return App.mockPromise(App.mocks.timeSuggestion.get);
        }
    }
}