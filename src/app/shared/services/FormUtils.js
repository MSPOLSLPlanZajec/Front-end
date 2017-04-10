export default function ($mdToast) {

    function showToast(type, msg, parentId, position){
        var pos = position || 'top-right';

        $mdToast.show($mdToast.simple()
            .textContent(msg)
            .position('top right')
            .parent(document.querySelectorAll(parentId))
            .toastClass(type == 'success' ? 'success-toast' : 'failure-toast')              
            .hideDelay(3000)
        );        
    }

    function showSuccessToast(msg, parentId, position){
        showToast('success', msg, parentId, position)
    }

    function showFailureToast(msg, parentId, position){
        showToast('failure', msg, parentId, position)
    }

    function clearForm(form){
        form.$setPristine();
        form.$setUntouched();
    }

    return { showSuccessToast, showFailureToast, clearForm }
}