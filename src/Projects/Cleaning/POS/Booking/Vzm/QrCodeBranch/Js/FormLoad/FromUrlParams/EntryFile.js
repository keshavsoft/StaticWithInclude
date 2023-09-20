let StartFunc = () => {
    let jVarLocalFromCreate = getUrlQueryParams({ inGetKey: "FromCreate" })

    if (jVarLocalFromCreate) {
        let jVarLocalUserName = getUrlQueryParams({ inGetKey: "UserName" })

        let jVarLocalHtmlId = 'AlertSuccessId';
        let jVarLocalAlertSuccessId = document.getElementById(jVarLocalHtmlId);
        jVarLocalAlertSuccessId.style.display = "";

        jFLocalToInnerHtmlAlertSuccessIdUserName({ inAlertSuccessIdUserName: jVarLocalUserName });
    };
};

let jFLocalToInnerHtmlAlertSuccessIdUserName = ({ inAlertSuccessIdUserName }) => {
    let jVarLocalHtmlId = 'AlertSuccessIdUserName';
    let jVarLocalAlertSuccessIdUserName = document.getElementById(jVarLocalHtmlId);
    jVarLocalAlertSuccessIdUserName.innerHTML = inAlertSuccessIdUserName;
};

let jFLocalToInputKUserNameInput = ({ inKUserNameInput }) => {
    let jVarLocalHtmlId = 'KUserNameInput';
    let jVarLocalKUserNameInput = document.getElementById(jVarLocalHtmlId);
    jVarLocalKUserNameInput.value = inKUserNameInput;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

let jFLocalHtmlFocusKPasswordInput = () => {
    let jVarLocalHtmlId = 'KPasswordInput';
    let jVarLocalKPasswordInput = document.getElementById(jVarLocalHtmlId);
    jVarLocalKPasswordInput.focus();
};

export { StartFunc }