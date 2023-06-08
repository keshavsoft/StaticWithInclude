let StartFunc = ({ inFromFetch, inBodyData }) => {
    if (Array.isArray(inFromFetch)) {

    } else {
        jFLocalPostFetchAsArray({ inFromFetch, inBodyData });
    };
};

let jFLocalPostFetchAsArray = ({ inFromFetch, inBodyData }) => {
    if (jFLocalPostFetchCheckTF({ inFromFetch })) {
        const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);

        if ("FolderName" in inBodyData) {
            myUrlWithParams.searchParams.append("inFolderName", inBodyData.FolderName);
        };

        if ("FileName" in inBodyData) {
            myUrlWithParams.searchParams.append("inFileName", inBodyData.FileName);
        };

        if ("NewItemName" in inBodyData) {
            myUrlWithParams.searchParams.append("NewItemName", inBodyData.NewItemName);
        };

        window.location.href = myUrlWithParams.href;
    };
};

let jFLocalPostFetchCheckTF = ({ inFromFetch }) => {
    const myUrlWithParams = new URL(window.location.href);

    if (inFromFetch.ConfigFolderCreated) {
        myUrlWithParams.searchParams.append("ConfigFolderCreated", true);
    };

    if (inFromFetch.DataFolderCreated) {
        myUrlWithParams.searchParams.append("DataFolderCreated", true);
    };

    if (inFromFetch.KTF) {
        return true;
    };

    return false;
};

export { StartFunc };