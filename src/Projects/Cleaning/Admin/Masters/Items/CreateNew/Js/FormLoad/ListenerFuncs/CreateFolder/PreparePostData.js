let StartFunc = () => {
    let jVarLocalHtmlId = "CreateFolderInputId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value.trim();

    return {
        // Category: jVarLocalFolderName,
        ItemName: jVarLocalFolderName,
        // DryWashRate: jFLocalRate.jVarLocalFolderName,
        // Pcs: jVarLocalFolderName
        ...jFLocalCategory(),
        ...jFLocalRate(),
        ...jFLocalPcs()
    };
};

let jFLocalCategory = () => {
    let jVarLocalHtmlCategoryInputId = "CategoryInputId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlCategoryInputId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value.trim();

    return {
        Category: jVarLocalFolderName
    };
};

let jFLocalRate = () => {
    let jVarLocalHtmlRateId = "RateId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlRateId);

    let jVarLocalFolderName = parseInt(jVarCreateFolderInputId.value.trim());

    return {
        DryWashRate: jVarLocalFolderName
    };
};


let jFLocalPcs = () => {
    let jVarLocalHtmlPcsId = "PcsId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlPcsId);

    let jVarLocalFolderName = parseInt(jVarCreateFolderInputId.value.trim());

    return {
        Pcs: jVarLocalFolderName
    };
};

export { StartFunc };