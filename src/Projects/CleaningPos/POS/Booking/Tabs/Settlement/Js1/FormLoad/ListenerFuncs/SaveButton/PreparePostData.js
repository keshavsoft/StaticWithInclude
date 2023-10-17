let StartFunc = () => {
    return {
        CashAmount: parseInt(jFLocalCashAmountId()),
        CardAmount: parseInt(jFLocalCardAmountId()),
        UPIAmount: parseInt(jFLocalUPIAmountId())
    };
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

export { StartFunc };