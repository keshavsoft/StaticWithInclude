// import PrepareKeysJson from "./PrepareKeys.json" assert {type: 'json'};
import ApiConfigJson from "./../../../../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalGstData = {};

    jVarLocalGstData.DiscountAmount = parseFloat(jFLocalFromDomDiscountAmount()) || 0;
    jVarLocalGstData.CGST = parseFloat(jFLocalFromDomCgstAmountId()) || 0;
    jVarLocalGstData.SGST = parseFloat(jFLocalFromDomSgstAmountId()) || 0;

    let jVarLocalReturnObject = {};
    jVarLocalReturnObject.JsonConfig={};
    jVarLocalReturnObject.ItemConfig={};

    jVarLocalReturnObject.JsonConfig.inFolderName = ApiConfigJson.ForFetch.FolderName;
    jVarLocalReturnObject.JsonConfig.inJsonFileName = ApiConfigJson.ForFetch.JsonFileName;

    jVarLocalReturnObject.ItemConfig.inItemName = ApiConfigJson.ForFetch.ItemName;
    jVarLocalReturnObject.MainRowPK = jFLocalFromDomOrderNumberId();

    jVarLocalReturnObject.InsertKey = "CheckOutData";
    jVarLocalReturnObject.inDataToUpdate = {};

    jVarLocalReturnObject.inDataToUpdate.RoundOff = parseFloat(jFLocalFromDomRoundOffId()) || 0;
    jVarLocalReturnObject.inDataToUpdate.CashAmount = parseInt(jFLocalCashAmountId()) || 0;
    jVarLocalReturnObject.inDataToUpdate.CardAmount = parseInt(jFLocalCardAmountId()) || 0;
    jVarLocalReturnObject.inDataToUpdate.UPIAmount = parseInt(jFLocalUPIAmountId()) || 0;
    jVarLocalReturnObject.inDataToUpdate.DiscountPer = parseInt(jFLocalFromDomDiscountId()) || 0;

    jVarLocalReturnObject.inDataToUpdate.GstData = jVarLocalGstData;

    return jVarLocalReturnObject;
};

let jFLocalFromDomCgstAmountId = () => {
    let jVarLocalHtmlCgstAmountId = 'CgstAmountId';
    let jVarHtmlCgstAmountId = document.getElementById(jVarLocalHtmlCgstAmountId);
    let jVarHtmlCgstAmountIdValue = jVarHtmlCgstAmountId.value.trim();
    return jVarHtmlCgstAmountIdValue;
};

let jFLocalFromDomSgstAmountId = () => {
    let jVarLocalHtmlSgstAmountId = 'SgstAmountId';
    let jVarHtmlSgstAmountId = document.getElementById(jVarLocalHtmlSgstAmountId);
    let jVarHtmlSgstAmountIdValue = jVarHtmlSgstAmountId.value.trim();
    return jVarHtmlSgstAmountIdValue;
};

let jFLocalFromDomDiscountAmount = () => {
    let jVarLocalHtmlDiscountAmount = 'DiscountAmountId';
    let jVarHtmlDiscountAmount = document.getElementById(jVarLocalHtmlDiscountAmount);
    let jVarHtmlDiscountAmountValue = jVarHtmlDiscountAmount.value.trim();
    return jVarHtmlDiscountAmountValue;
};

let jFLocalFromDomDiscountId = () => {
    let jVarLocalHtmlDiscountId = 'DiscountPerId';
    let jVarHtmlDiscountId = document.getElementById(jVarLocalHtmlDiscountId);
    let jVarHtmlDiscountIdValue = jVarHtmlDiscountId.value.trim();
    return jVarHtmlDiscountIdValue;
};

let jFLocalCashAmountId = () => {
    let jVarLocalHtmlCashAmountId = 'CashAmountId';
    let jVarHtmlCashAmountId = document.getElementById(jVarLocalHtmlCashAmountId);
    let jVarHtmlCashAmountIdValue = jVarHtmlCashAmountId.value.trim();
    return jVarHtmlCashAmountIdValue;
};

let jFLocalCardAmountId = () => {
    let jVarLocalHtmlCardAmountId = 'CardAmountId';
    let jVarHtmlCardAmountId = document.getElementById(jVarLocalHtmlCardAmountId);
    let jVarHtmlCardAmountIdValue = jVarHtmlCardAmountId.value.trim();
    return jVarHtmlCardAmountIdValue;
};

let jFLocalUPIAmountId = () => {
    let jVarLocalHtmlUPIAmountId = 'UPIAmountId';
    let jVarHtmlUPIAmountId = document.getElementById(jVarLocalHtmlUPIAmountId);
    let jVarHtmlUPIAmountIdValue = jVarHtmlUPIAmountId.value.trim();
    return jVarHtmlUPIAmountIdValue;
};

let jFLocalFromDomOrderNumberId = () => {
    let jVarLocalHtmlOrderNumberId = 'OrderNumberId';
   let jVarHtmlOrderNumberId = document.getElementById(jVarLocalHtmlOrderNumberId);
   let jVarHtmlOrderNumberIdValue = jVarHtmlOrderNumberId.innerHTML.trim();
   return jVarHtmlOrderNumberIdValue;
};

let jFLocalFromDomRoundOffId = () => {
    let jVarLocalHtmlRoundOffId = 'RoundOffId';
   let jVarHtmlRoundOffId = document.getElementById(jVarLocalHtmlRoundOffId);
   let jVarHtmlRoundOffIdValue = jVarHtmlRoundOffId.value.trim();
   return jVarHtmlRoundOffIdValue;
};

export { StartFunc };