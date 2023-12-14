let StartFunc = async () => {

    let jVarLocalCustomerNamevalue = jFLocalFromDomCustomerNameId();
    let jVarLocalCustomerCityIdvalue = jFLocalFromDomCityId();
    let jVarLocalCustomerMobileIdvalue = jFLocalFromDomMobileId();

    let formData = {};

    formData.inFolderName = "Masters";
    formData.inFileNameOnly = "CRM";
    formData.inItemName = "CustomerNames";
    formData.inDataToInsert = {};
    formData.inDataToInsert.CustomerName= jVarLocalCustomerNamevalue;
    formData.inDataToInsert.Mobile= jVarLocalCustomerMobileIdvalue;
    formData.inDataToInsert.City= jVarLocalCustomerCityIdvalue;

    return await formData;
};



let jFLocalFromDomCustomerNameId = () => {
    let jVarLocalHtmlCustomerNameId = 'CustomerNameId';
    let jVarHtmlCustomerNameId = document.getElementById(jVarLocalHtmlCustomerNameId);
    let jVarHtmlCustomerNameIdValue = jVarHtmlCustomerNameId.value;
    return jVarHtmlCustomerNameIdValue;
};

let jFLocalFromDomCityId = () => {
    let jVarLocalHtmlCityId = 'CityId';
    let jVarHtmlCityId = document.getElementById(jVarLocalHtmlCityId);
    let jVarHtmlCityIdValue = jVarHtmlCityId.value;
    return jVarHtmlCityIdValue;
};

let jFLocalFromDomMobileId = () => {
    let jVarLocalHtmlMobileId = 'MobileId';
    let jVarHtmlMobileId = document.getElementById(jVarLocalHtmlMobileId);
    let jVarHtmlMobileIdValue = jVarHtmlMobileId.value;
    return jVarHtmlMobileIdValue;
};


export { StartFunc };