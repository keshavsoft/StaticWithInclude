let StartFunc = ({ inDataFromApi }) => {
    if (jFLocalFolderClass({ inDataFromApi })) {
        if (jFLocalFileClass({ inDataFromApi })) {
            if (jFLocalItemClass({ inDataFromApi })) {
                jFLocalScreenClass({inDataFromApi});
                jFLocalColumnClass({
                    inDataFromApi
                });
            };
        };
    };
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

        return true;
    };
};

let jFLocalItemClass = ({ inDataFromApi }) => {
    let jVarLocalFromUrl = getUrlQueryParams({ inGetKey: "inFolderName" });
    let jVarLocalFromUrlinFileName = getUrlQueryParams({ inGetKey: "inFileName" });
    let jVarLocalFromUrlinItemName = getUrlQueryParams({ inGetKey: "inItemName" });

    let jVarLocalFilekeyNeeded = `Folders.${jVarLocalFromUrl}.Files.${jVarLocalFromUrlinFileName}.Items.${jVarLocalFromUrlinItemName}`;

    if (jVarLocalFromUrlinFileName === null === false) {
        _.has(inDataFromApi, jVarLocalFilekeyNeeded) && _.set(inDataFromApi, `${jVarLocalFilekeyNeeded}.ShowOnLoad`, true);

        return true;
    };
};

let jFLocalScreenClass = ({ inDataFromApi }) => {
    console.log('inDataFromApi:',inDataFromApi);
    let jVarLocalFromUrl = getUrlQueryParams({ inGetKey: "inFolderName" });
    let jVarLocalFromUrlinFileName = getUrlQueryParams({ inGetKey: "inFileName" });
    let jVarLocalFromUrlinItemName = getUrlQueryParams({ inGetKey: "inItemName" });
    let jVarLocalFromUrlinScreenName = getUrlQueryParams({ inGetKey: "inScreenName" });

    let jVarLocalFilekeyNeeded = `Folders.${jVarLocalFromUrl}.Files.${jVarLocalFromUrlinFileName}.Items.${jVarLocalFromUrlinItemName}.Screens.${jVarLocalFromUrlinScreenName}`;

    if (jVarLocalFromUrlinFileName === null === false) {
        _.has(inDataFromApi, jVarLocalFilekeyNeeded) && _.set(inDataFromApi, `${jVarLocalFilekeyNeeded}.CollapseClass`, "show");

        return true;
    };
};

let jFLocalColumnClass = ({ inDataFromApi }) => {
    console.log('inDataFromApi:',inDataFromApi);
    let jVarLocalFromUrl = getUrlQueryParams({ inGetKey: "inFolderName" });
    let jVarLocalFromUrlinFileName = getUrlQueryParams({ inGetKey: "inFileName" });
    let jVarLocalFromUrlinItemName = getUrlQueryParams({ inGetKey: "inItemName" });
    let jVarLocalFromUrlinScreenName = getUrlQueryParams({ inGetKey: "inScreenName" });
    let jVarLocalFromUrlinColumnName = getUrlQueryParams({ inGetKey: "inColumnName" });

    let jVarLocalFilekeyNeeded = `Folders.${jVarLocalFromUrl}.Files.${jVarLocalFromUrlinFileName}.Items.${jVarLocalFromUrlinItemName}.Screens.${jVarLocalFromUrlinScreenName}.TableColumnsObject.${jVarLocalFromUrlinColumnName}`;

    if (jVarLocalFromUrlinFileName === null === false) {
        _.has(inDataFromApi, jVarLocalFilekeyNeeded) && _.set(inDataFromApi, `${jVarLocalFilekeyNeeded}.RowClass`, "table-success");

        return true;
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };