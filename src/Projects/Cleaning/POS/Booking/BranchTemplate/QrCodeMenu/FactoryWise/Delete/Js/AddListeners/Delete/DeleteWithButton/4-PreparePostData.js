import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from './BodyKeys.json' assert {type: 'json'};

let StartFunc = async ({ inCurrentTarget }) => {
    console.log("inCurrentTarget", inCurrentTarget);
    let jVarLocalJsonPk = inCurrentTarget.dataset.pk;
    let jVarLocalFolderValue = "QrCodes";
    let jVarLocalFileValue = "Generate.json";
    let jVarLocalItemValue = "Barcodes";

    console.log("jVarLocalJsonPk", jVarLocalJsonPk);

   
    BodyKeysJson.inJsonConfig.inFolderName = jVarLocalFolderValue;
    BodyKeysJson.inJsonConfig.inJsonFileName = jVarLocalFileValue;
    BodyKeysJson.inItemConfig.inItemName = jVarLocalItemValue;
    // BodyKeysJson.inItemConfig.inScreenName = jVarLocalScreenValue;
    BodyKeysJson.inJsonPK = jVarLocalJsonPk;

    KeysJson.body = JSON.stringify(BodyKeysJson);

    return KeysJson;
};

export { StartFunc }
