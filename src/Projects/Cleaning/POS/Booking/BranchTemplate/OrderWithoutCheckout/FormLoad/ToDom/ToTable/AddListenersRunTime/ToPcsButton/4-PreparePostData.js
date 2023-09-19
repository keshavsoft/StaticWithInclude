// import PrepareKeysJson from "./PrepareKeys.json" assert {type: 'json'};
import ApiConfigJson from "../../../../../../ApiConfig.json" assert {type: 'json'};

const StartFunc = ({ inPcs, inItemSerial }) => {
    let jVarLocalOrderNumber = jFLocalFromDomOrderNumberId();

    let jVarLocalToLocalStorage = {};

    jVarLocalToLocalStorage.JsonConfig = {};
    jVarLocalToLocalStorage.JsonConfig.inFolderName = ApiConfigJson.ForFetch.FolderName;
    jVarLocalToLocalStorage.JsonConfig.inJsonFileName = ApiConfigJson.ForFetch.JsonFileName;

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

let jFLocalFromDomOrderNumberId = () => {
    let jVarLocalHtmlOrderNumberId = 'OrderNumberId';
    let jVarHtmlOrderNumberId = document.getElementById(jVarLocalHtmlOrderNumberId);
    let jVarHtmlOrderNumberIdValue = jVarHtmlOrderNumberId.innerHTML.trim();
    return jVarHtmlOrderNumberIdValue;
};

export { StartFunc };