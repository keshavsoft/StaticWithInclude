import { StartFunc as StartFuncPreparePostData } from "./PreparePostData.js";
import { StartFunc as StartFuncPostFetch } from "./PostFetch.js";
import { StartFunc as StartFuncFetchFunc } from "./FetchFunc.js";

let StartFunc = async ({ inEvent, inProjectName }) => {

    let jFetchUrl = `/${inProjectName}/AdminApi/AsTree/Json/UserFolders/AdminFolder/PreloadJsonFile/FromKeys/ConfigKey/DataListInfoKey`;

    let jVarLocalBodyData = StartFuncPreparePostData({ inEvent });
    console.log("jVarLocalBodyData:",jVarLocalBodyData);

    let response = await StartFuncFetchFunc({
        inBodyData: jVarLocalBodyData,
        Url: jFetchUrl
    });

    StartFuncPostFetch({
        inFromFetch: response,
        inBodyData: jVarLocalBodyData
    });
};

// let jFLocalCallFetch = async ({ inBodyData, Url }) => {
//     let localUrl = Url;

//     let jFetchBody = {
//         method: "post",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(inBodyData)
//     };

//     let response = await fetch(localUrl, jFetchBody);

//     if (response.status === 200) {
//         return await response.json();
//     };
// };

export { StartFunc };