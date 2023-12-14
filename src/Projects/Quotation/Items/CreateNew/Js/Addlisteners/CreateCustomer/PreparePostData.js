let StartFunc = async () => {

    let jVarLocalCustomerNamevalue = jFLocalFromDomCustomerNameId();
    let jVarLocalCustomerCityIdvalue = jFLocalFromDomCityId();

    let formData = {};

    formData.inFolderName = "Masters";
    formData.inFileNameOnly = "CRM";
    formData.inItemName = "Items";
    formData.inDataToInsert = {};
    formData.inDataToInsert.ItemName= jVarLocalCustomerNamevalue;
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




export { StartFunc };