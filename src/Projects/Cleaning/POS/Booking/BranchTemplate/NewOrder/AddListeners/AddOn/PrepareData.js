let StartFunc = () => {
    let jVarLocalAddOnServiceId = document.getElementById("AddOnServiceId");
    let jVarLocalAddOnRateId = document.getElementById("AddOnRateId");
    let jVarLocalAddOnItemId = document.getElementById("AddOnItemId");
    let jVarLocalAddOnImageId = document.getElementById("AddOnImageId");

    let jVarLocalAddOnRateIdValue = jVarLocalAddOnRateId.value;
    let jVarLocaljVarLocalAddOnItemIdValue = jVarLocalAddOnItemId.value;
    let jVarLocaljVarLocalAddOnImageIdValue = jVarLocalAddOnImageId.value;

    var jVarLocalAddOnServiceIdtext = jVarLocalAddOnServiceId.options[jVarLocalAddOnServiceId.selectedIndex].text;

    return {
        inAddOnService: jVarLocalAddOnServiceIdtext,
        inAddOnRate: parseInt(jVarLocalAddOnRateIdValue),
        inAddOnItemSerial: parseInt(jVarLocaljVarLocalAddOnItemIdValue),
        inAddOnImageSerial: jVarLocaljVarLocalAddOnImageIdValue
    };
};

export { StartFunc };