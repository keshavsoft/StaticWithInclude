let StartFunc = () => {
    let jVarLocalSendNowId = document.getElementById('SendNowId');

    jVarLocalSendNowId.addEventListener("click", (event) => {
        let jVarLocalCurrentTarget = event.currentTarget;

        webSocket.send("This if for Testing");
    });
};

export { StartFunc };