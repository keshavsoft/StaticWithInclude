import { StartFunc as StartFuncAfterFetchFunc } from "./6-AfterFetchFunc.js";


const StartFunc = async ({ inFetchBody }) => {

    let LocalDataPK = inFetchBody.DataPK;

    let jFetchUrl = `/JSONUser/Users/Api/SetupByCopy/FoldersOnly/FromPk/${LocalDataPK}`;

    let response = await fetch(jFetchUrl);

    let jVarLocalResponseData = await response.json();

    StartFuncAfterFetchFunc({ inFetchData: jVarLocalResponseData, inFetchBody });

}

export { StartFunc };