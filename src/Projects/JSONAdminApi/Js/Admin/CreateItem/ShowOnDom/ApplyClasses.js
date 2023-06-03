let StartFunc = ({ inDataFromApi }) => {
    let jVarLocalFromUrl = getUrlQueryParams({ inGetKey: "inFolderName" });
    let jVarLocalFromUrlinFileName = getUrlQueryParams({ inGetKey: "inFileName" });

    _.set(inDataFromApi, `Folders.${jVarLocalFromUrl}.TabPageClass`, " show active");
    _.set(inDataFromApi, `Folders.${jVarLocalFromUrl}.MenuClass`, " active");

    _.set(inDataFromApi, `Folders.${jVarLocalFromUrl}.Files.${jVarLocalFromUrlinFileName}.TabPaneClass`, " show active");
    _.set(inDataFromApi, `Folders.${jVarLocalFromUrl}.Files.${jVarLocalFromUrlinFileName}.ButtonClass`, " active");

    // if (jVarLocalFromUrl in inDataFromApi.Folders) {
    //     inDataFromApi.Folders[jVarLocalFromUrl].TabPageClass = " show active";
    //     inDataFromApi.Folders[jVarLocalFromUrl].MenuClass = " active";

    //     let jVarLocalFromUrlinFileName = getUrlQueryParams({ inGetKey: "inFileName" });

    //     if (jVarLocalFromUrlinFileName in inDataFromApi.Folders[jVarLocalFromUrl].Files) {
    //         inDataFromApi.Folders[jVarLocalFromUrl].Files[jVarLocalFromUrlinFileName].TabPaneClass = " show active";
    //         inDataFromApi.Folders[jVarLocalFromUrl].Files[jVarLocalFromUrlinFileName].ButtonClass = " active";
    //     };
    // };
};

let StartFunc1 = ({ inDataFromApi }) => {
    let jVarLocalFromUrl = getUrlQueryParams({ inGetKey: "inFolderName" });

    if (jVarLocalFromUrl in inDataFromApi.Folders) {
        inDataFromApi.Folders[jVarLocalFromUrl].TabPageClass = " show active";
        inDataFromApi.Folders[jVarLocalFromUrl].MenuClass = " active";

        let jVarLocalFromUrlinFileName = getUrlQueryParams({ inGetKey: "inFileName" });

        if (jVarLocalFromUrlinFileName in inDataFromApi.Folders[jVarLocalFromUrl].Files) {
            inDataFromApi.Folders[jVarLocalFromUrl].Files[jVarLocalFromUrlinFileName].TabPaneClass = " show active";
            inDataFromApi.Folders[jVarLocalFromUrl].Files[jVarLocalFromUrlinFileName].ButtonClass = " active";
        };
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };