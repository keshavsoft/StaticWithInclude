let StartFunc = ({ inFromFetch, inBodyData,currentTarget }) => {
    if (Array.isArray(inFromFetch)) {
        jFLocalPostFetchAsArray({ inFromFetch, inBodyData,currentTarget });
    } else {
        jFLocalPostFetchNotArray({ inFromFetch, inBodyData,currentTarget });
    };
};

let jFLocalPostFetchNotArray = ({ inFromFetch, inBodyData,currentTarget }) => {
    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);

    if ("FolderName" in inBodyData) {
        myUrlWithParams.searchParams.append("inFolderName", inBodyData.FolderName);
    };

    if ("FileName" in inBodyData) {
        myUrlWithParams.searchParams.append("inFileName", inBodyData.FileName);
    };
    if ("ItemName" in inBodyData) {
        myUrlWithParams.searchParams.append("ItemName", inBodyData.ItemName);
    };

    if (inFromFetch.KTF) {
        window.location.href = myUrlWithParams.href;
    }else{
        let jVarLocalColsestTr = currentTarget.closest("tr");
        let jVarLocalFileName = jVarLocalColsestTr.querySelector('[name="slectFile"]');
        let jVarLocaldiv = jVarLocalColsestTr.querySelector('.invalid-feedback');

        jVarLocalFileName.classList.add("is-invalid");
        jVarLocaldiv.innerHTML = "Already found!"
    }
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

        if ("ItemName" in inBodyData) {
            myUrlWithParams.searchParams.append("ItemName", inBodyData.ItemName);
        };

        window.location.href = myUrlWithParams.href;
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

export { StartFunc };