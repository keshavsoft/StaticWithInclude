let StartFunc = () => {
    let jVarLocalUserName = getUrlQueryParams({ inGetKey: "UserName" })

    jFLocalToInputKUserNameInput({ inKUserNameInput: jVarLocalUserName });
    jFLocalHtmlFocusKPasswordInput();
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