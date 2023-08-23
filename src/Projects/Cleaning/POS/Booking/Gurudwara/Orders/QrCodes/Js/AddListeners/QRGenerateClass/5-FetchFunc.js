import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

const StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;
    let inProjectName = jVarLocalBodyData.inProjectName;
    let inRowPk = jVarLocalBodyData.inRowPk;
    // let jVarLocalFetchUrl = `/${inProjectName}/API/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Custom/PostFromPk/${inRowPk}`;
    let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/PostQrCodes/Washtex/${inRowPk}`;
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();
    console.log("jVarLocalResponse---:", jVarLocalResponse);
    StartFuncAfterFetch({ inFromFetch: jVarLocalResponse });

    return jVarLocalResponse;

};
export { StartFunc };
