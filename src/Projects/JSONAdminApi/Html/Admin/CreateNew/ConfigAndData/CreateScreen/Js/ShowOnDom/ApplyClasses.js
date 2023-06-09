let StartFunc = ({ inDataFromApi }) => {
    if (jFLocalFolderClassApply({ inDataFromApi })) {
        if (jFLocalFileClassApply({ inDataFromApi })) {
            jFLocalItemClassApply({ inDataFromApi });
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

let jFLocalItemClass_Keshav = ({ inDataFromApi, inFolderName, inFileName, inItemName }) => {
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

let StartFunc11111 = ({ inDataFromApi }) => {
    let jVarLocalFromUrl = getUrlQueryParams({ inGetKey: "inFolderName" });
    let jVarLocalFromUrlinFileName = getUrlQueryParams({ inGetKey: "inFileName" });
    console.log("jVarLocalFromUrl : ", jVarLocalFromUrl);

    if (jVarLocalFromUrl === null === false) {
        let jVarLocalFolderkeyNeeded = `Folders.${jVarLocalFromUrl}.Files.${jVarLocalFromUrlinFileName}`;

        _.has(inDataFromApi, `Folders.${jVarLocalFromUrl}`) && _.set(inDataFromApi, `Folders.${jVarLocalFromUrl}.TabPageClass`, " show active");
        _.has(inDataFromApi, `Folders.${jVarLocalFromUrl}`) && _.set(inDataFromApi, `Folders.${jVarLocalFromUrl}.MenuClass`, " active");

        if (jVarLocalFromUrlinFileName === null === false) {
            let jVarLocalFilekeyNeeded = `Folders.${jVarLocalFromUrl}.Files.${jVarLocalFromUrlinFileName}`;

            _.has(inDataFromApi, jVarLocalFilekeyNeeded) && _.set(inDataFromApi, `${jVarLocalFilekeyNeeded}.TabPaneClass`, " show active");
            _.has(inDataFromApi, jVarLocalFilekeyNeeded) && _.set(inDataFromApi, `${jVarLocalFilekeyNeeded}.ButtonClass`, " active");
        };
    };

    // _.set(inDataFromApi, `Folders.${jVarLocalFromUrl}.MenuClass`, " active");

    // _.set(inDataFromApi, `Folders.${jVarLocalFromUrl}.Files.${jVarLocalFromUrlinFileName}.TabPaneClass`, " show active");
    // _.set(inDataFromApi, `Folders.${jVarLocalFromUrl}.Files.${jVarLocalFromUrlinFileName}.ButtonClass`, " active");
};


export { StartFunc };