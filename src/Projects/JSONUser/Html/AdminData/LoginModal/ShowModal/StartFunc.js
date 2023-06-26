let StartFunc = () => {
    var myModal = document.getElementById('LoginModalId')

    myModal.addEventListener('shown.bs.modal', function () {
        document.getElementById('KUserNameInput').focus()
    })
};

export { StartFunc }
