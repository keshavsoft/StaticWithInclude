import PrepareBodyJson from "./PrepareBody.json" assert {type: 'json'};

let StartFunc = () => {
    let inDataToInsert = {}

    let jVarLocalCustomerName = document.getElementById("CustomerNameId");
    let jVarLocalCustomerCityId = document.getElementById("CityId");
    let jVarLocalCustomerMobileId = document.getElementById("MobileId");
    let jVarLocalCustomerNamevalue = jVarLocalCustomerName.value;
    let jVarLocalCustomerCityIdvalue = jVarLocalCustomerCityId.value;
    let jVarLocalCustomerMobileIdvalue = jVarLocalCustomerMobileId.value;

    inDataToInsert.CustomerName = jVarLocalCustomerNamevalue;
    inDataToInsert.Mobile = jVarLocalCustomerMobileIdvalue;
    inDataToInsert.City = jVarLocalCustomerCityIdvalue;

    return inDataToInsert;
};

export { StartFunc };