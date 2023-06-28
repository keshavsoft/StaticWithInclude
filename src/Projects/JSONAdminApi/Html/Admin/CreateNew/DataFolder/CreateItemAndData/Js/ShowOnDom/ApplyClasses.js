let StartFunc = ({ inDataFromApi }) => {
    if (jFLocalFolderClass({ inDataFromApi })) {
        jFLocalFileClass({ inDataFromApi });
        jFLocalItemClass({inDataFromApi});
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
    };
};

let jFLocalItemClass = ({ inDataFromApi }) => {
    let jVarLocalFromUrl = getUrlQueryParams({ inGetKey: "inFolderName" });
    let jVarLocalFromUrlinFileName = getUrlQueryParams({ inGetKey: "inFileName" });
    let jVarLocalFromUrlItemName = getUrlQueryParams({ inGetKey: "ItemName" });

    let jVarLocalItemkeyNeeded = `Folders.${jVarLocalFromUrl}.Files.${jVarLocalFromUrlinFileName}.Items.${jVarLocalFromUrlItemName}`;
    if (jVarLocalItemkeyNeeded === null === false) {
        _.has(inDataFromApi, jVarLocalItemkeyNeeded) && _.set(inDataFromApi, `${jVarLocalItemkeyNeeded}.RowClass`, " table-success");
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };