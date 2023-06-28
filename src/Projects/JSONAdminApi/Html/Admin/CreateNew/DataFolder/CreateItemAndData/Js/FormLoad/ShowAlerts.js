
const StartFunc = () => {
    let jVarLocalForData = getUrlQueryParams({ inGetKey: "ItemName" });

    if (jVarLocalForData === null) {
        const alert = new bootstrap.Alert('#DataFolderInsertSuccessId');
        alert.close();
    };
    document.getElementById("DataFolderInsertSuccessStrongId").innerHTML = jVarLocalForData
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
