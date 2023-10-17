import PrepareBodyJson from "./PrepareBody.json" assert {type: 'json'};

let StartFunc = () => {
    
    let jVarLocalBodyData = {};
    jVarLocalBodyData ={
        ...PrepareBodyJson
    }
    jVarLocalBodyData.inDataToSave.Category = jFLocalCategory();
    jVarLocalBodyData.inDataToSave.ItemName = jFLocalItemName();
    jVarLocalBodyData.inDataToSave.DryWashRate = jFLocalRate();
    jVarLocalBodyData.inDataToSave.Pcs = jFLocalPcs();

    return jVarLocalBodyData;
};

let jFLocalItemName = () => {
    let jVarLocalHtmlId = "CreateFolderInputId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value.trim();

    return jVarLocalFolderName
};

let jFLocalCategory = () => {
    let jVarLocalHtmlCategoryInputId = "CategoryInputId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlCategoryInputId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value.trim();

    return jVarLocalFolderName;
};

let jFLocalRate = () => {
    let jVarLocalHtmlRateId = "RateId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlRateId);

    let jVarLocalFolderName = parseInt(jVarCreateFolderInputId.value.trim());

    return jVarLocalFolderName
};


let jFLocalPcs = () => {
    let jVarLocalHtmlPcsId = "PcsId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlPcsId);

    let jVarLocalFolderName = parseInt(jVarCreateFolderInputId.value.trim());

    return jVarLocalFolderName
};

export { StartFunc };