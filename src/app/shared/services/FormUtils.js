export default function ($mdToast) {

    function showToast(type, msg, parentId){
        $mdToast.show($mdToast.simple()
            .textContent(msg)
            .position('top right')
            .parent(document.querySelectorAll(parentId))
            .theme(`${type}-toast`)                  
            .hideDelay(3000)
        );        
    }

    function showSuccessToast(msg, parentId){
        showToast('success', msg, parentId)
    }

    function showFailureToast(msg, parentId){
        showToast('failure', msg, parentId)
    }

    function clearForm(form){
        form.$setPristine();
        form.$setUntouched();
    }

    return { showSuccessToast, showFailureToast, clearForm }
}