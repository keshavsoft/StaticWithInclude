import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
// import ProjectKeys from "../../../../../../ConfigKeys/ProjectKeys.json" assert {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/JSONApi/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsObjectWithPK`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    let data = await response.json();

    return await data;
};

export { StartFunc };