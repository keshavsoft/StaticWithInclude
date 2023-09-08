// import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
// import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";
// import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
// import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

let StartFunc = async () => {
   
    // if (StartFuncCheckBeforeFetch()) {
    //     let jVarLocalBodyData = StartFuncPreparePostData();
    //     console.log("jVarLocalBodyData", jVarLocalBodyData);

    //     let response = await StartFuncFetchFunc({
    //         inBodyData: jVarLocalBodyData
    //     });

        // StartFuncAfterFetch({ inFromFetch: response });
    // };
    let QrCodeNumber = jFLocalFromDomScanId();

    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);

    myUrlWithParams.searchParams.append("Qrcode", QrCodeNumber);

    window.location.href = myUrlWithParams.href;

};

let jFLocalFromDomScanId = () => {
    let jVarLocalHtmlScanId = 'ScanId';
   let jVarHtmlScanId = document.getElementById(jVarLocalHtmlScanId);
   let jVarHtmlScanIdValue = jVarHtmlScanId.value.trim();
   return jVarHtmlScanIdValue;
};

export { StartFunc };