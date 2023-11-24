import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ProjectKeys from "../../../../ConfigKeys/ProjectKeys.json" assert {type: 'json'};

let StartFunc = async ({ inEvent }) => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders({ inEvent });
    let jVarLocalFetchUrl = `/${ProjectKeys.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/RowDatas/WithImage`
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    // let data = await response.json();

    return await response;
    // return await data;
};

export { StartFunc };