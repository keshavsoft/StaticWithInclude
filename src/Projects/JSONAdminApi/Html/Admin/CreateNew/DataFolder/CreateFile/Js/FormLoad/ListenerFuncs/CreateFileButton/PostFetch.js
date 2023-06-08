let StartFunc = ({ inFromFetch, inNewFolderName, inNewFileName }) => {
    if (Array.isArray(inFromFetch)) {
        jFLocalPostFetchAsArray({ inFromFetch, inNewFolderName, inNewFileName });
    } else {
        jFLocalPostFetchNotArray({ inFromFetch, inNewFolderName, inNewFileName });
    };
};

let jFLocalPostFetchNotArray = ({ inFromFetch, inNewFolderName, inNewFileName }) => {
    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);

    if (inFromFetch.ConfigFolderCreated) {
        myUrlWithParams.searchParams.append("ConfigFolderCreated", true);
    };

    if (inFromFetch.KTF) {
        myUrlWithParams.searchParams.append("inFolderName", inNewFolderName);
        myUrlWithParams.searchParams.append("NewFileName", inNewFileName);
        window.location.href = myUrlWithParams.href;
    };
};

let jFLocalPostFetchAsArray = ({ inFromFetch, inNewFolderName, inNewFileName }) => {
    const myUrlWithParams = new URL(window.location.href);

    let jVarLocalFromConfig = inFromFetch.find(element => {
        return element.ConfigFolderCreated
    });

    if (jVarLocalFromConfig === undefined === false) {
        myUrlWithParams.searchParams.append("ConfigFolderCreated", true);
        // const alert = bootstrap.Alert.getOrCreateInstance('#ConfigFolderInsertSuccessId');
        // alert.close();
    };

    let jVarLocalFromData = inFromFetch.find(element => {
        return element.DataFolderCreated
    });

    if (jVarLocalFromData === undefined === false) {
        myUrlWithParams.searchParams.append("DataFolderCreated", true);
        // const alert = bootstrap.Alert.getOrCreateInstance('#DataFolderInsertSuccessId');
        // alert.close();
    };

    let jVarLocalAnyCreated = inFromFetch.filter(element => {
        return element.KTF
    });

    // FolderCreated

    if (jVarLocalAnyCreated.length > 0) {
        myUrlWithParams.searchParams.append("NewFileName", inNewFileName);
        window.location.href = myUrlWithParams.href;
    };
};

export { StartFunc };