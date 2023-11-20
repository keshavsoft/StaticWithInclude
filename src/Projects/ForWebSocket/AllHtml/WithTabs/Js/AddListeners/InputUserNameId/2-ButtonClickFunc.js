let StartFunc = () => {
    Swal.fire({
        title: "Change UserName",
        text: "Enter New UserName",
        input: 'text',
        showCancelButton: true        
    }).then((result) => {
        if (result.value) {
            jVarLocalAlterClientName({ inmessage: result.value })
        }
    });
    
};

let jVarLocalAlterClientName = ({ inmessage }) => {

    let LocalObjectToSend = {};
    LocalObjectToSend.Type = "AlterClient";
    LocalObjectToSend.UserName = inmessage;
    webSocket.send(JSON.stringify(LocalObjectToSend));
}


export { StartFunc };