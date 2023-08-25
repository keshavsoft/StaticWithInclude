let StartFunc = () => {
    return {
        ...jFLocalCustomerName(),
        ...jFLocalMobile(),
        City: jFLocalCityId()
    };
};

let jFLocalCustomerName = () => {
    let jVarLocalHtmlRateId = "CustomerNameId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlRateId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value.trim();

    return {
        CustomerName: jVarLocalFolderName
    };
};

let jFLocalMobile = () => {
    let jVarLocalHtmlRateId = "MobileId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlRateId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value.trim();

    return {
        Mobile: jVarLocalFolderName
    };
};

let jFLocalCityId = () => {
    let jVarLocalHtmlCityId = 'CityId';
   let jVarHtmlCityId = document.getElementById(jVarLocalHtmlCityId);
   let jVarHtmlCityIdValue = jVarHtmlCityId.value.trim();
   return jVarHtmlCityIdValue;
};

let jFLocalCityId1 = () => {
    let jVarLocalHtmlCityId = "CityId";
    let jVarHtmlCityId = document.getElementById(jVarLocalHtmlCityId);
    let jVarHtmlCityIdValue = jVarHtmlCityId.value.trim();

    return jVarHtmlCityIdValue;
};

export { StartFunc };