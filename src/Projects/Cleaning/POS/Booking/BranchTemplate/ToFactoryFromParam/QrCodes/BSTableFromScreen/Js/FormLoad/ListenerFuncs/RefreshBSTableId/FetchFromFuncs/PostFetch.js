import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ProjectKeys from "../../../../../ConfigKeys/ProjectKeys.json" assert {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    // let jVarLocalFetchUrl = `/${ProjectKeys.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsObjectWithPK`;
    let jVarLocalFetchUrl = `/${ProjectKeys.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AggregateFuncs/OnValues/Filter`;

    // let jVarLocalFetchUrl = `/${ProjectKeys.ProjectName}/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/MainTable/WithSelectedColumns`
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    let data = await response.json();

    return await data;
};

export { StartFunc };