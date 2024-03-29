import PrepareBodyJson from "./PrepareBody.json" assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyData = {};
    jVarLocalBodyData ={
        ...PrepareBodyJson
    }
    jVarLocalBodyData.inDataToSave.CustomerName = jFLocalCustomerName();
    jVarLocalBodyData.inDataToSave.Mobile = jFLocalMobile();
    jVarLocalBodyData.inDataToSave.City = jFLocalCityId();

    return jVarLocalBodyData;
};

let jFLocalCustomerName = () => {
    let jVarLocalHtmlRateId = "CustomerNameId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlRateId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value.trim();

    return jVarLocalFolderName
};

let jFLocalMobile = () => {
    let jVarLocalHtmlRateId = "MobileId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlRateId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value.trim();

    return jVarLocalFolderName;
};

let jFLocalCityId = () => {
    let jVarLocalHtmlCityId = 'CityId';
   let jVarHtmlCityId = document.getElementById(jVarLocalHtmlCityId);
   let jVarHtmlCityIdValue = jVarHtmlCityId.value.trim();
   return jVarHtmlCityIdValue;
};

export { StartFunc };