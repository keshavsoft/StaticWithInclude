import { StartFunc as StartFuncAfterFetchFunc } from "./6-AfterFetchFunc.js";


const StartFunc = async ({ inFetchBody, inSubRoute }) => {

    // let jFetchUrl = `/${inSubRoute}/Users/Api/CreateAndSetup/Cleaning/FromUserCredentials`;
    let jFetchUrl = `/${inSubRoute}/Users/Api/CreateAndSetup/Blank/ForCredentials`;

    let jLocalFetchConfig = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inFetchBody.FormData)
    };

    let response = await fetch(jFetchUrl, jLocalFetchConfig);

    if (response.ok === false) {
        swal.fire(response.statusText)
    } else {
        let jVarLocalResponseData = await response.json();
        StartFuncAfterFetchFunc({ inFetchData: jVarLocalResponseData });

    };
};

export { StartFunc };