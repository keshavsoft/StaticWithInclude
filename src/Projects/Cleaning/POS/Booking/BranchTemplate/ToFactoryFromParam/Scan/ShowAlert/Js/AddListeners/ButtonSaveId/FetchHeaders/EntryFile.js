import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from '../../../../ConfigKeys/FetchKeys/ForPostKeysAsIs.json' assert {type: 'json'};

let StartFunc = () => {

    BodyKeysJson.inDataToInsert = {};

    BodyKeysJson.inDataToInsert.pk = jFLocalFromDomInputPkId();
    BodyKeysJson.inDataToInsert.ItemName = jFLocalFromDomInputProductNameId();
    BodyKeysJson.inDataToInsert.Rate = jFLocalFromDomInputSalePriceId();
    BodyKeysJson.inDataToInsert.FactorySelected = jFLocalFromDomInputFactorySelectedId();
    BodyKeysJson.inDataToInsert.VoucherRef = jFLocalFromDomInputVoucherRefId();
    BodyKeysJson.inDataToInsert.BranchName = jFLocalFromDomInputBranchNameId();
    BodyKeysJson.inDataToInsert.VoucherNumber = jFLocalFromDomVoucherNumberTextId();
    BodyKeysJson.inDataToInsert.DCFactory = jFLocalFromDomDCFactoryTextId();
    BodyKeysJson.inDataToInsert.DCDate = jFLocalFromDomDateTextId();
    BodyKeysJson.inDataToInsert.DCDescription = jFLocalFromDomDescriptionTextId();

    KeysJson.body = JSON.stringify(BodyKeysJson);

    return KeysJson;
};

let jFLocalFromDomInputPkId = () => {
    let jVarLocalHtmlInputPkId = 'InputPkId';
   let jVarHtmlInputPkId = document.getElementById(jVarLocalHtmlInputPkId);
   let jVarHtmlInputPkIdValue = jVarHtmlInputPkId.value.trim();
   return jVarHtmlInputPkIdValue;
};

let jFLocalFromDomInputProductNameId = () => {
    let jVarLocalHtmlInputProductNameId = 'InputProductNameId';
   let jVarHtmlInputProductNameId = document.getElementById(jVarLocalHtmlInputProductNameId);
   let jVarHtmlInputProductNameIdValue = jVarHtmlInputProductNameId.value.trim();
   return jVarHtmlInputProductNameIdValue;
};

let jFLocalFromDomInputSalePriceId = () => {
    let jVarLocalHtmlInputSalePriceId = 'InputSalePriceId';
   let jVarHtmlInputSalePriceId = document.getElementById(jVarLocalHtmlInputSalePriceId);
   let jVarHtmlInputSalePriceIdValue = jVarHtmlInputSalePriceId.value.trim();
   return jVarHtmlInputSalePriceIdValue;
};

let jFLocalFromDomInputVoucherRefId = () => {
    let jVarLocalHtmlInputVoucherRefId = 'InputVoucherRefId';
   let jVarHtmlInputVoucherRefId = document.getElementById(jVarLocalHtmlInputVoucherRefId);
   let jVarHtmlInputVoucherRefIdValue = jVarHtmlInputVoucherRefId.value.trim();
   return jVarHtmlInputVoucherRefIdValue;
};

let jFLocalFromDomInputBranchNameId = () => {
    let jVarLocalHtmlInputBranchNameId = 'InputBranchNameId';
   let jVarHtmlInputBranchNameId = document.getElementById(jVarLocalHtmlInputBranchNameId);
   let jVarHtmlInputBranchNameIdValue = jVarHtmlInputBranchNameId.value.trim();
   return jVarHtmlInputBranchNameIdValue;
};

let jFLocalFromDomVoucherNumberTextId = () => {
    let jVarLocalHtmlVoucherNumberTextId = 'VoucherNumberTextId';
   let jVarHtmlVoucherNumberTextId = document.getElementById(jVarLocalHtmlVoucherNumberTextId);
   let jVarHtmlVoucherNumberTextIdValue = jVarHtmlVoucherNumberTextId.value.trim();
   return jVarHtmlVoucherNumberTextIdValue;
};

let jFLocalFromDomInputFactorySelectedId = () => {
    let jVarLocalHtmlInputFactorySelectedId = 'InputFactorySelectedId';
   let jVarHtmlInputFactorySelectedId = document.getElementById(jVarLocalHtmlInputFactorySelectedId);
   let jVarHtmlInputFactorySelectedIdValue = jVarHtmlInputFactorySelectedId.value.trim();
   return jVarHtmlInputFactorySelectedIdValue;
};

let jFLocalFromDomDCFactoryTextId = () => {
    let jVarLocalHtmlDCFactoryTextId = 'DCFactoryTextId';
   let jVarHtmlDCFactoryTextId = document.getElementById(jVarLocalHtmlDCFactoryTextId);
   let jVarHtmlDCFactoryTextIdValue = jVarHtmlDCFactoryTextId.value.trim();
   return jVarHtmlDCFactoryTextIdValue;
};

let jFLocalFromDomDescriptionTextId = () => {
    let jVarLocalHtmlDescriptionTextId = 'DescriptionTextId';
   let jVarHtmlDescriptionTextId = document.getElementById(jVarLocalHtmlDescriptionTextId);
   let jVarHtmlDescriptionTextIdValue = jVarHtmlDescriptionTextId.value.trim();
   return jVarHtmlDescriptionTextIdValue;
};

let jFLocalFromDomDateTextId = () => {
    let jVarLocalHtmlDateTextId = 'DateTextId';
   let jVarHtmlDateTextId = document.getElementById(jVarLocalHtmlDateTextId);
   let jVarHtmlDateTextIdValue = jVarHtmlDateTextId.value.trim();
   return jVarHtmlDateTextIdValue;
};
export { StartFunc }