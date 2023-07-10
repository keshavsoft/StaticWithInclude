import { StartFunc as StartFuncDatalist } from "./Datalist.js";

let StartFunc = async () => {
    let jVarLocalRoute = window.location.pathname.split("/")[1];
    let jVarLocalFetchUrl = `/${jVarLocalRoute}/AdminApi/FromData/GetFoldersAsArray`;

    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let dataFromApiJsonData = await jVarLocalFromFetch.json();

    if (dataFromApiJsonData !== null) {
        StartFuncDatalist({ inData: dataFromApiJsonData });
    };
};

export { StartFunc }