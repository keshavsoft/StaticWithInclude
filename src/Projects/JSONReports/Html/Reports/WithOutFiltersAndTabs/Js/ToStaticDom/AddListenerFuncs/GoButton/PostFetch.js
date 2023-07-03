let StartFunc = ({ inFromFetch, inBodyData }) => {
    if (Array.isArray(inFromFetch)) {
        jFLocalPostFetchAsArray({ inFromFetch, inBodyData });
    };
};

let jFLocalPostFetchCheckTF = ({ inFromFetch }) => {
    const myUrlWithParams = new URL(window.location.href);

    let jVarLocalFromConfig = inFromFetch.find(element => {
        return element.ConfigFolderCreated
    });

    if (jVarLocalFromConfig === undefined === false) {
        myUrlWithParams.searchParams.append("ConfigFolderCreated", true);
    };

    let jVarLocalFromData = inFromFetch.find(element => {
        return element.DataFolderCreated
    });

    if (jVarLocalFromData === undefined === false) {
        myUrlWithParams.searchParams.append("DataFolderCreated", true);
    };

    let jVarLocalAnyCreated = inFromFetch.filter(element => {
        return element.KTF
    });

    if (jVarLocalAnyCreated.length > 0) {
        return true;
    };

    return false;
};

let jFLocalPostFetchAsArray = ({ inFromFetch, inBodyData }) => {
    console.log("inBodyData:",inBodyData);
    if (jFLocalPostFetchCheckTF({ inFromFetch })) {
        const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);

        if ("FolderName" in inBodyData) {
            myUrlWithParams.searchParams.append("inFolderName", inBodyData.FolderName);
        };

        if ("FileName" in inBodyData) {
            myUrlWithParams.searchParams.append("inFileName", inBodyData.FileName);
        };

        if ("ItemName" in inBodyData) {
            myUrlWithParams.searchParams.append("inItemName", inBodyData.ItemName);
        };
        if ("ScreenName" in inBodyData) {
            myUrlWithParams.searchParams.append("inScreenName", inBodyData.ScreenName);
        };
        if ("NewColumnName" in inBodyData) {
            myUrlWithParams.searchParams.append("inColumnName", inBodyData.NewColumnName);
        };

        window.location.href = myUrlWithParams.href;
    };
};

export { StartFunc };