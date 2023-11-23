let StartFunc = () => {

    let jVarLocalCustomerNamevalue = jFLocalFromDomCustomerNameId();
    let jVarLocalCustomerCityIdvalue = jFLocalFromDomCityId();
    let jVarLocalCustomerMobileIdvalue = jFLocalFromDomMobileId();
    let jVarLocalfileUploadvalue = jFLocalFromDominputimageId();

    let formData = new FormData();

    formData.append("inFolderName", "Masters");
    formData.append("inFileNameOnly", "CRM");
    formData.append("inItemName", "CustomerNames");
    formData.append("CustomerName", jVarLocalCustomerNamevalue);
    formData.append("Mobile", jVarLocalCustomerMobileIdvalue);
    formData.append("City", jVarLocalCustomerCityIdvalue);
    formData.append('uploaded_file', jVarLocalfileUploadvalue);

    return formData;
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

let jFLocalFromDominputimageId = () => {
    let jVarLocalHtmlinputimageId = 'inputimageId';
    let jVarHtmlinputimageId = document.getElementById(jVarLocalHtmlinputimageId);
    let jVarHtmlinputimageIdValue = jVarHtmlinputimageId.files[0];
    return jVarHtmlinputimageIdValue;
};

export { StartFunc };