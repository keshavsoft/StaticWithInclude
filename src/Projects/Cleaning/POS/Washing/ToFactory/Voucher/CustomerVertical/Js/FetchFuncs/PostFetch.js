import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    // let jVarLocalFetchUrl = "http://localhost:4119/JSONApi/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/MainTable/WithSelectedColumns";
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = "http://localhost:4119/JSONApi/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsObjectWithPK";

    // POST http://localhost:4119/JSONApi/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsArrayWithPK

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    let data = await response.json();

    return await data;
};

export { StartFunc };