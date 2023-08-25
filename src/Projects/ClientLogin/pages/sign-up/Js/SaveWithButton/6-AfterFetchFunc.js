let StartFunc = ({ inFetchData }) => {
    console.log("inFetchData : ", inFetchData, typeof inFetchData);
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
                jVarLocalErrorAlertDiv.innerHTML = inFetchData.KReason;

                jVarLocalErrorAlertDiv.style.display = "";
                jFLocalHtmlFocusUserNameId();
            };
            break;
    };
};

let jFLocalHtmlFocusUserNameId = () => {
   let jVarLocalHtmlId = 'UserNameId';
   let jVarLocalUserNameId = document.getElementById(jVarLocalHtmlId);
   jVarLocalUserNameId.focus();
};

export { StartFunc };
