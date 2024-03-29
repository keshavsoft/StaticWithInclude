import { StartFunc as StartFuncAfterFetchFunc } from "./6-AfterFetchFunc.js";

const StartFunc = async ({ inFetchBody }) => {
    let jVarLocalSubRoute = "JSONUser";
    let jVarLocalFetchBody = inFetchBody;

    let jVarLocalUserName = jVarLocalFetchBody.FormData.UserName;
    let jVarLocalPassWord = jVarLocalFetchBody.FormData.PassWord;

    // let jFetchUrl = `/${jVarLocalSubRoute}/Insert/Users/UserDataJson/CreateForCleaning/${jVarLocalUserName}/${jVarLocalPassWord}`;

    let jFetchUrl = `/${jVarLocalSubRoute}/Insert/Users/UserDataJson/CreateForCleaning/TokenToCookie/${jVarLocalUserName}/${jVarLocalPassWord}`;

    // GET http://localhost:4116/JSONUser/Insert/Users/UserDataJson/CreateForCleaning/L21/L21
    
    let response = await fetch(jFetchUrl);

    let jVarLocalResponseData = await response.json();

    StartFuncAfterFetchFunc({
        inFetchData: jVarLocalResponseData,
        inUserName: jVarLocalUserName
    });
}

export { StartFunc };