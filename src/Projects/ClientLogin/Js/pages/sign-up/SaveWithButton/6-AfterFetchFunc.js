let StartFunc = ({ inFetchData }) => {
    let jVarLocalErrorAlertDiv = document.getElementById("ErrorAlertDiv");

    switch (typeof inFetchData) {
        case "string":
            jVarLocalErrorAlertDiv.classList.remove("alert-danger");
            jVarLocalErrorAlertDiv.classList.add("alert-secondary");

            jVarLocalErrorAlertDiv.innerHTML = jVarLocalErrorAlertDiv.innerHTML = inFetchData;

            jVarLocalErrorAlertDiv.style.display = "";

            break;
        default:
            if (inFetchData.KTF) {
                if ("KSClientError" in inFetchData) {
                    jVarLocalErrorAlertDiv.innerHTML = jVarLocalErrorAlertDiv.innerHTML = inFetchData.KError;

                    jVarLocalErrorAlertDiv.style.display = "";
                } else {
                    //      window.location = `/${inSubRoute}/Html/UserData/FromFolders.html`;
                };
            } else {
                jVarLocalErrorAlertDiv.innerHTML = jVarLocalErrorAlertDiv.innerHTML = inFetchData.KReason;

                jVarLocalErrorAlertDiv.style.display = "";
                jVarLocalUserName.focus();
            };
            break;
    };
};

export { StartFunc };
