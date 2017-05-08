export default function () {
    return {
        post: function (studyPlan){
            return App.mockPromise({response: "response"});
        }
    }
}