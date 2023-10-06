const StartFunc = () => {
    let jVarLocalFromSave = getUrlQueryParams({ inGetKey: "FromSave" });
    let jVarLocalCustomerName = getUrlQueryParams({ inGetKey: "CustomerName" });

    if (jVarLocalFromSave) {
        if (jVarLocalCustomerName === null === false) {
            let jVarLocalAlertCreateIdHtmlId = 'AlertCreateId';
            let jVarLocalAlertCreateId = document.getElementById(jVarLocalAlertCreateIdHtmlId);
            jVarLocalAlertCreateId.style.display = "";

            let jVarLocalStrong = jVarLocalAlertCreateId.querySelector("strong");
            jVarLocalStrong.innerHTML = jVarLocalCustomerName;
        }

    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
