// import PrepareKeysJson from "./PrepareKeys.json" assert {type: 'json'};
import ApiConfigJson from "../../../../../../ApiConfig.json" assert {type: 'json'};

const StartFunc = ({ inPcs, inItemSerial }) => {
    let jVarLocalOrderNumber = jFLocalFromDomOrderNumberId();
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    console.log("jVarLocalBranchName:",jVarLocalBranchName);

    let jVarLocalToLocalStorage = {};

    jVarLocalToLocalStorage.JsonConfig = {};
    jVarLocalToLocalStorage.JsonConfig.inFolderName = ApiConfigJson.ForFetch.FolderName;
    // jVarLocalToLocalStorage.JsonConfig.inJsonFileName = ApiConfigJson.ForFetch.JsonFileName;
    jVarLocalToLocalStorage.JsonConfig.inJsonFileName = `${jVarLocalBranchName}.json`;
    

    jVarLocalToLocalStorage.ItemConfig = {};
    jVarLocalToLocalStorage.ItemConfig.inItemName = ApiConfigJson.ForFetch.ItemName;

    jVarLocalToLocalStorage.InsertKey = "ItemsInOrder";

    // let jVarLocalToLocalStorage = {
    //     ...PrepareKeysJson
    // };

    jVarLocalToLocalStorage.MainRowPK = jVarLocalOrderNumber;
    jVarLocalToLocalStorage.SubTableRowPK = inItemSerial;
    // jVarLocalToLocalStorage.InsertKey = PrepareKeysJson.InsertKey;
    // jVarLocalToLocalStorage.inDataToUpdate = jFLocalPrepareObject();
    jVarLocalToLocalStorage.inDataToUpdate = {};
    jVarLocalToLocalStorage.inDataToUpdate.Pcs = parseInt(inPcs);
    return jVarLocalToLocalStorage;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

let jFLocalFromDomOrderNumberId = () => {
    let jVarLocalHtmlOrderNumberId = 'OrderNumberId';
    let jVarHtmlOrderNumberId = document.getElementById(jVarLocalHtmlOrderNumberId);
    let jVarHtmlOrderNumberIdValue = jVarHtmlOrderNumberId.innerHTML.trim();
    return jVarHtmlOrderNumberIdValue;
};

export { StartFunc };