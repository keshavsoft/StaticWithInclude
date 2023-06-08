let StartFunc = ({ inDataFromApi }) => {
    noFolderAlertFunc({ inDataFromApi });
    let jVarLocalFromUrl = getUrlQueryParams({ inGetKey: "inFolderName" });

    if (jVarLocalFromUrl in inDataFromApi.Folders) {
        inDataFromApi.Folders[jVarLocalFromUrl].TabPageClass = " show active";
        inDataFromApi.Folders[jVarLocalFromUrl].MenuClass = " active";
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

let StartFunc_Keshav3Jun2023 = ({ inDataFromApi }) => {
    let jVarLocalQueryParams = jFgetUrlQueryParams();
    let jVarLocaldataFromApi = inDataFromApi;

    if (Object.keys(jVarLocalQueryParams).length > 0) {

        LocalForClassesFromUrl({
            indataFromApi: jVarLocaldataFromApi,
            inQueryParamsAsObject: jVarLocalQueryParams
        });
    } else {
        LocalForApplyClasses({ indataFromApi: jVarLocaldataFromApi });
    };
};

let jFgetUrlQueryParams = () => {
    var queryParams = {}, param;
    var params = window.location.search.substring(1).split("&");
    // console.log("params : ", params);
    for (var i = 0; i < params.length; i++) {
        param = params[i].split('=');
        // console.log("param : ", param);
        if (param.length === 2) {
            queryParams[param[0]] = param[1];
        };
    }
    return queryParams;
};

let LocalForApplyClasses = ({ indataFromApi }) => {
    let jVarLocalFirstFolder;
    let jVarLocalFirstFile;
    let jVarLocalFirstItem;
    let jVarLocalFirstScreen;
    console.log("aaaaaaaaaaaa : ", indataFromApi);
    if ("Folders" in indataFromApi) {
        if (Object.values(indataFromApi.Folders).length > 0) {
            jVarLocalFirstFolder = Object.values(indataFromApi.Folders)[0];
            jVarLocalFirstFolder.TabPageClass = " show active";
            jVarLocalFirstFolder.MenuClass = " active";

            if ("Files" in jVarLocalFirstFolder) {
                if (Object.values(jVarLocalFirstFolder.Files).length > 0) {
                    jVarLocalFirstFile = Object.values(jVarLocalFirstFolder.Files)[0];
                    jVarLocalFirstFile.TabPaneClass = " show active";
                    jVarLocalFirstFile.ButtonClass = " active";

                    if ("Items" in jVarLocalFirstFile) {
                        if (Object.values(jVarLocalFirstFile.Items).length > 0) {
                            jVarLocalFirstItem = Object.values(jVarLocalFirstFile.Items)[0];
                            jVarLocalFirstItem.ShowOnLoad = true;

                            if ("Screens" in jVarLocalFirstItem) {
                                if (Object.values(jVarLocalFirstItem.Screens).length > 0) {
                                    jVarLocalFirstScreen = Object.values(jVarLocalFirstItem.Screens)[0];
                                    jVarLocalFirstScreen.CollapseClass = " show";
                                };
                            };
                        };
                    };
                };

            };

        };
    };
};

let LocalForClassesFromUrl = ({ indataFromApi, inQueryParamsAsObject }) => {
    let jVarLocalFolderName = inQueryParamsAsObject.inFolderName;

    if ("Folders" in indataFromApi) {
        if (jVarLocalFolderName in indataFromApi.Folders) {
            indataFromApi.Folders[jVarLocalFolderName].TabPageClass = " show active";
            indataFromApi.Folders[jVarLocalFolderName].MenuClass = " active";

        };
    };
};

let noFolderAlertFunc = ({ inDataFromApi }) => {

    if (Object.keys(inDataFromApi.Folders).length > 0) {
        const bsAlert = new bootstrap.Alert('#noFolderAlertID');
        bsAlert.close()

    } else {
        const bsAlert = new bootstrap.Alert('#noFolderAlertID');
    };
};

export { StartFunc }