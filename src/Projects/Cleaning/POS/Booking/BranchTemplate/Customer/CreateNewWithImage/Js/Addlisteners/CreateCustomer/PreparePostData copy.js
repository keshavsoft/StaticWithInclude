import PrepareBodyJson from "./PrepareBody.json" assert {type: 'json'};

let StartFunc = () => {

    let jVarLocalCustomerName = document.getElementById("CustomerNameId");
    let jVarLocalCustomerCityId = document.getElementById("CityId");
    let jVarLocalCustomerMobileId = document.getElementById("MobileId");
    let jVarLocalCustomerNamevalue = jVarLocalCustomerName.value;
    let jVarLocalCustomerCityIdvalue = jVarLocalCustomerCityId.value;
    let jVarLocalCustomerMobileIdvalue = jVarLocalCustomerMobileId.value;

    PrepareBodyJson.inDataToSave.CustomerName = jVarLocalCustomerNamevalue;
    PrepareBodyJson.inDataToSave.Mobile = jVarLocalCustomerMobileIdvalue;
    PrepareBodyJson.inDataToSave.City = jVarLocalCustomerCityIdvalue;
    
    return PrepareBodyJson;
};

export { StartFunc };