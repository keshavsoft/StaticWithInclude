import ApiConfigJson from "./../../../../../../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = async ({ inSettlementData }) => {
    let jVarLocalBodyData = inSettlementData;

    let jVarLocalFetchUrl = `/${ApiConfigJson.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/SubTable/UpdateAsObject`;
    // POST http://localhost:4119/JSONApi/Api/Data/FromFolder/FromFile/Items/FromDataFolder/WithScreens/SubTable/WithChecking/Insert


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

export { StartFunc };

// import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../../../../../ToLocalStorage/CheckOutData/Update.js";
// import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../../../../../ToLocalStorage/OrdersData/Update.js";

// let StartFunc = ({ inOrderKey, inSettlementData }) => {
//     return jFToLocalStorage({ inOrderKey, inSettlementData });
// };

// const jFToLocalStorage = ({ inOrderKey, inSettlementData }) => {
//     let jVarLocalOrderKey = getUrlQueryParams({ inGetKey: "OrderNumber" });

//     // return StartFuncToLocalStorage({
//     //     inOrderKey: jVarLocalOrderKey,
//     //     inSettlementData
//     // });
// };

// let getUrlQueryParams = ({ inGetKey }) => {
//     const queryString = window.location.search;
//     const parameters = new URLSearchParams(queryString);
//     const value = parameters.get(inGetKey);
//     return value;
// };