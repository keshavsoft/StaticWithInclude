let StartFunc = ({ inDataFromApi }) => {
    let jVarLocalFrominFolderName = getUrlQueryParams({ inGetKey: "inFolderName" });
    let jVarLocalFromUrlinFileName = getUrlQueryParams({ inGetKey: "inFileName" });
    let jVarLocalFromUrlinItemName = getUrlQueryParams({ inGetKey: "inItemName" });
    if (jFLocalFolderClass({ inDataFromApi })) {
         (jFLocalFileClass({ inDataFromApi }))
            jFLocalItemClass({
                inDataFromApi, inFolderName: jVarLocalFrominFolderName,
                inFileName: jVarLocalFromUrlinFileName,
                inItemName: jVarLocalFromUrlinItemName
            });
            
    };
    noFolderAlertFunc({ inDataFromApi });
};

let jFLocalFolderClass = ({ inDataFromApi }) => {
    let jVarLocalFromUrl = getUrlQueryParams({ inGetKey: "inFolderName" });

    if (jVarLocalFromUrl === null === false) {
        let jVarLocalFilekeyNeeded = `Folders.${jVarLocalFromUrl}`;

        _.has(inDataFromApi, jVarLocalFilekeyNeeded) && _.set(inDataFromApi, `${jVarLocalFilekeyNeeded}.TabPageClass`, " show active");
        _.has(inDataFromApi, jVarLocalFilekeyNeeded) && _.set(inDataFromApi, `${jVarLocalFilekeyNeeded}.MenuClass`, " active");

        return true;
    };
};

let jFLocalFileClass = ({ inDataFromApi }) => {
    let jVarLocalFromUrl = getUrlQueryParams({ inGetKey: "inFolderName" });
    let jVarLocalFromUrlinFileName = getUrlQueryParams({ inGetKey: "inFileName" });

    let jVarLocalFilekeyNeeded = `Folders.${jVarLocalFromUrl}.Files.${jVarLocalFromUrlinFileName}`;

    if (jVarLocalFromUrlinFileName === null === false) {
        _.has(inDataFromApi, jVarLocalFilekeyNeeded) && _.set(inDataFromApi, `${jVarLocalFilekeyNeeded}.TabPaneClass`, " show active");
        _.has(inDataFromApi, jVarLocalFilekeyNeeded) && _.set(inDataFromApi, `${jVarLocalFilekeyNeeded}.ButtonClass`, " active");
    };

};

let jFLocalItemClass = ({ inDataFromApi, inFolderName, inFileName, inItemName }) => {
    let jVarLocalFilekeyNeeded = `Folders.${inFolderName}.Files.${inFileName}.Items.${inItemName}`;

    if (inItemName === null === false) {
        _.has(inDataFromApi, jVarLocalFilekeyNeeded) && _.set(inDataFromApi, `${jVarLocalFilekeyNeeded}.ShowOnLoad`, true);
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

let noFolderAlertFunc = ({ inDataFromApi }) => {

    if (Object.keys(inDataFromApi.Folders).length > 0) {
        const bsAlert = new bootstrap.Alert('#noFolderAlertID');
        bsAlert.close()

    } else {
        const bsAlert = new bootstrap.Alert('#noFolderAlertID');
    };
};

export { StartFunc };