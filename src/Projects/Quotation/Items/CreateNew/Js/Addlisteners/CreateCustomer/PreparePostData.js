let StartFunc = async () => {

    let jVarLocalCustomerNamevalue = jFLocalFromDomCustomerNameId();
    let jVarLocalCustomerCityIdvalue = jFLocalFromDomCityId();
    // let jVarLocalCustomerMobileIdvalue = jFLocalFromDomMobileId();

    let formData = {};

    formData.inFolderName = "Masters";
    formData.inFileNameOnly = "CRM";
    formData.inItemName = "Items";
    formData.inDataToInsert = {};
    formData.inDataToInsert.ItemName= jVarLocalCustomerNamevalue;
    // formData.inDataToInsert.Rate= jVarLocalCustomerMobileIdvalue;
    formData.inDataToInsert.Rate= jVarLocalCustomerCityIdvalue;

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