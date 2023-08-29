// import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../../../../../ToLocalStorage/Items/Single.js";
import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../../POS/Booking/ToLocalStorage/Items/Single.js";

import ApiConfigJson from "./../../../../../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;

    let jVarLocalFetchUrl = `/${ApiConfigJson.ProjectName}/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Save`;

    // http://localhost:4119/JSONApi/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Save
    let jVarLocalFetchHeaderObject = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

let StartFunc1 = ({ inBodyData }) => {
    return jFToLocalStorage({ inBodyData });
};

const jFToLocalStorage = ({ inBodyData }) => {
    return StartFuncToLocalStorage({ inEntry: inBodyData });
};

export { StartFunc };