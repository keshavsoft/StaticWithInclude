let StartFunc = () => {
    Swal.fire({
        title: "Are you sure?",
        icon: 'warning',
        confirmButtonText: 'Yes',
        showCancelButton: true        
    }).then((result) => {
        if (result['isConfirmed']) {
            jVarLocalTerminate()
        }
    });
};

let jVarLocalTerminate = () => {

    let LocalObjectToSend = {};
    LocalObjectToSend.Type = "Terminate";
    webSocket.send(JSON.stringify(LocalObjectToSend));
}

export { StartFunc };