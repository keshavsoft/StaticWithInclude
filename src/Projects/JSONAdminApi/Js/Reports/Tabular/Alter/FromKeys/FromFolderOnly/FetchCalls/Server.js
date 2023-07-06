import { StartFunc as StartFuncDatalist } from "../ShowOnDom/Datalist.js";

let StartFunc = async () => {
    let jVarLocalRoute = window.location.pathname.split("/")[1];
    let jVarLocalFetchUrl = `/${jVarLocalRoute}/AdminApi/FromData/GetFoldersAsArray`;

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let dataFromApiJsonData = await jVarLocalFromFetch.json();
    let dataFromApi = dataFromApiJsonData.JsonData;

    if (dataFromApi !== null) {
        StartFuncDatalist({ inData: dataFromApi });

    };

    return await dataFromApi;
};

export { StartFunc }