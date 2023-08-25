import PrepareKeysJson from "./PrepareKeys.json" assert {type: 'json'};
import ApiConfigJson from "../../../../../../ApiConfig.json" assert {type: 'json'};

const StartFunc = () => {
    let jFLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });
    let jVarLocalBodyData = {
        ...PrepareKeysJson
    };
    let jVarLocalRowPk = jFLocalOrderNumber;
    let jVarLocalFileNameOnly = ApiConfigJson.JsonFileNameOnly
    jVarLocalBodyData.inValueToCheck.GenerateReference.ReferncePk = jVarLocalRowPk;
    jVarLocalBodyData.inValueToCheck.GenerateReference.FileNameOnly = jVarLocalFileNameOnly;

    return jVarLocalBodyData;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };


// import ConfigJson from "../../../../../../ApiConfig.json" assert {type: 'json'};

// let StartFunc = () => {
//     let jVarLocalBody = {
//         inFolderName: "Transactions",
//         inFileNameOnly: ConfigJson.JsonFileNameOnly,
//         inItemName: "Orders"
//     };

//     return jVarLocalBody;
// };

// export { StartFunc };