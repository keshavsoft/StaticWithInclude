let StartFunc = () => {
    let jVarLocalCashAmount = parseInt(jFLocalCashAmountId()) || 0;
    let jVarLocalCardAmount = parseInt(jFLocalCardAmountId()) || 0;
    let jVarLocalUPIAmount = parseInt(jFLocalUPIAmountId()) || 0;
    let jVarLocalOrderAmount = parseInt(jFLocalOrderAmountId()) || 0;
    let jVarLocalCheckAmount = jVarLocalCashAmount + jVarLocalCardAmount + jVarLocalUPIAmount;
    if (jVarLocalCheckAmount === jVarLocalOrderAmount) {
        return true;
    }
    return false;
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

let jFLocalOrderAmountId = () => {
    let jVarLocalHtmlOrderAmountId = 'OrderAmountId';
    let jVarHtmlOrderAmountId = document.getElementById(jVarLocalHtmlOrderAmountId);
    let jVarHtmlOrderAmountIdValue = jVarHtmlOrderAmountId.innerHTML;
    return jVarHtmlOrderAmountIdValue;
};

export { StartFunc };