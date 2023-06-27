let StartFunc = ({ inDataFromApi }) => {
    if (jFLocalFolderClassApply({ inDataFromApi })) {
        if (jFLocalFileClassApply({ inDataFromApi })) {
            if (jFLocalItemClassApply({ inDataFromApi })) {
                if (jFLocalScreenClassApply({ inDataFromApi })) {
                    jFLocalSubTableColumnsClassApply({ inDataFromApi });
                };
            };
        };
    };
};

let jFLocalFolderClassApply = ({ inDataFromApi }) => {
    let jVarLocalFromUrl = getUrlQueryParams({ inGetKey: "inFolderName" });

    if (jVarLocalFromUrl === null === false) {
        let jVarLocalFilekeyNeeded = `Folders.${jVarLocalFromUrl}`;

        _.has(inDataFromApi, jVarLocalFilekeyNeeded) && _.set(inDataFromApi, `${jVarLocalFilekeyNeeded}.TabPageClass`, " show active");
        _.has(inDataFromApi, jVarLocalFilekeyNeeded) && _.set(inDataFromApi, `${jVarLocalFilekeyNeeded}.MenuClass`, " active");

        return true;
    };
};

let jFLocalFileClassApply = ({ inDataFromApi }) => {
    let jVarLocalFromUrl = getUrlQueryParams({ inGetKey: "inFolderName" });
    let jVarLocalFromUrlinFileName = getUrlQueryParams({ inGetKey: "inFileName" });

    let jVarLocalFilekeyNeeded = `Folders.${jVarLocalFromUrl}.Files.${jVarLocalFromUrlinFileName}`;

    if (jVarLocalFromUrlinFileName === null === false) {
        _.has(inDataFromApi, jVarLocalFilekeyNeeded) && _.set(inDataFromApi, `${jVarLocalFilekeyNeeded}.TabPaneClass`, " show active");
        _.has(inDataFromApi, jVarLocalFilekeyNeeded) && _.set(inDataFromApi, `${jVarLocalFilekeyNeeded}.ButtonClass`, " active");

        return true;
    };
};

let jFLocalItemClassApply = ({ inDataFromApi }) => {
    let jVarLocalFromUrl = getUrlQueryParams({ inGetKey: "inFolderName" });
    let jVarLocalFromUrlinFileName = getUrlQueryParams({ inGetKey: "inFileName" });
    let jVarLocalFromUrlinItemName = getUrlQueryParams({ inGetKey: "inItemName" });

    let jVarLocalFilekeyNeeded = `Folders.${jVarLocalFromUrl}.Files.${jVarLocalFromUrlinFileName}.Items.${jVarLocalFromUrlinItemName}`;

    if (jVarLocalFromUrlinFileName === null === false) {
        _.has(inDataFromApi, jVarLocalFilekeyNeeded) && _.set(inDataFromApi, `${jVarLocalFilekeyNeeded}.ShowOnLoad`, true);

        return true;
    };
};

let jFLocalScreenClassApply = ({ inDataFromApi }) => {
    let jVarLocalFromUrl = getUrlQueryParams({ inGetKey: "inFolderName" });
    let jVarLocalFromUrlinFileName = getUrlQueryParams({ inGetKey: "inFileName" });
    let jVarLocalFromUrlinItemName = getUrlQueryParams({ inGetKey: "inItemName" });
    let jVarLocalFromUrlinScreenName = getUrlQueryParams({ inGetKey: "inScreenName" });

    let jVarLocalFilekeyNeeded = `Folders.${jVarLocalFromUrl}.Files.${jVarLocalFromUrlinFileName}.Items.${jVarLocalFromUrlinItemName}.Screens.${jVarLocalFromUrlinScreenName}`;

    if (jVarLocalFromUrlinScreenName === null === false) {
        _.has(inDataFromApi, jVarLocalFilekeyNeeded) && _.set(inDataFromApi, `${jVarLocalFilekeyNeeded}.CollapseClass`, "show");

        return true;
    };
};

let jFLocalSubTableColumnsClassApply = ({ inDataFromApi }) => {
    let jVarLocalFromUrl = getUrlQueryParams({ inGetKey: "inFolderName" });
    let jVarLocalFromUrlinFileName = getUrlQueryParams({ inGetKey: "inFileName" });
    let jVarLocalFromUrlinItemName = getUrlQueryParams({ inGetKey: "inItemName" });
    let jVarLocalFromUrlinScreenName = getUrlQueryParams({ inGetKey: "inScreenName" });
    let jVarLocalFromUrlsubtablecolumnkey = getUrlQueryParams({ inGetKey: "subtablecolumnkey" });

    let jVarLocalFilekeyNeeded = `Folders.${jVarLocalFromUrl}.Files.${jVarLocalFromUrlinFileName}.Items.${jVarLocalFromUrlinItemName}.Screens.${jVarLocalFromUrlinScreenName}.SubTableColumnsObject.${jVarLocalFromUrlsubtablecolumnkey}`;

    if (jVarLocalFromUrlsubtablecolumnkey === null === false) {
        _.has(inDataFromApi, jVarLocalFilekeyNeeded) && _.set(inDataFromApi, `${jVarLocalFilekeyNeeded}.TabPageClass`, " show active");
        _.has(inDataFromApi, jVarLocalFilekeyNeeded) && _.set(inDataFromApi, `${jVarLocalFilekeyNeeded}.MenuClass`, " active");

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