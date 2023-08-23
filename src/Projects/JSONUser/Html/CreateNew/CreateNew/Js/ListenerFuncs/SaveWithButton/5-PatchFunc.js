import { StartFunc as StartFuncAfterFetchFunc } from "./6-AfterFetchFunc.js";


const StartFunc = async ({ inFetchBody,inSubRoute }) => {

    let jFetchUrl = `/${inSubRoute}/Users/Api/Save`;

    let jLocalFetchConfig = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inFetchBody.FormData)
    };

    let response = await fetch(jFetchUrl, jLocalFetchConfig);

    let jVarLocalResponseData = await response.json();



    StartFuncAfterFetchFunc({ inFetchData: jVarLocalResponseData });

    // return await response.status;

}

export { StartFunc };