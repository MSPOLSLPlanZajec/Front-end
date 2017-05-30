export default function () {
    return {
         authorize: (loginData) => App.mockPromise("authResult")
    }
}