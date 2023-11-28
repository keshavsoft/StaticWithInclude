import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";
import ApiConfigJson from "../../../ApiConfig.json" assert {type: 'json'};

const StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;
    let inProjectName = jVarLocalBodyData.inProjectName;
    let inFileNameOnly = ApiConfigJson.JsonFileNameOnly
    let inRowPk = jVarLocalBodyData.inRowPk;
    let jVarLocalFetchUrl = `/${inProjectName}/Api/Data/PostQrCodes/Cleaning/${inFileNameOnly}/${inRowPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();
    StartFuncAfterFetch({ inFromFetch: jVarLocalResponse });

    return jVarLocalResponse;

};
export { StartFunc };
