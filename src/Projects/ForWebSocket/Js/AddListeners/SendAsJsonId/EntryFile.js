let StartFunc = () => {
    let jVarLocalSendNowId = document.getElementById('SendAsJsonId');

    jVarLocalSendNowId.addEventListener("click", (event) => {
        let jVarLocalYourIp = localStorage.getItem("YourIp");
        let jVarLocalGpsLatitude = localStorage.getItem("GpsLatitude");
        let jVarLocalGpsLongitude = localStorage.getItem("GpsLongitude");

        let jVarLocalJson = {};
        jVarLocalJson.Type = "ClientMetaData";
        jVarLocalJson.ClientMetaData = {};
        jVarLocalJson.ClientMetaData.YourIp = jVarLocalYourIp;
        jVarLocalJson.ClientMetaData.GpsLatitude = jVarLocalGpsLatitude;
        jVarLocalJson.ClientMetaData.GpsLongitude = jVarLocalGpsLongitude;

        webSocket.send(JSON.stringify(jVarLocalJson));

    });
};

export { StartFunc };