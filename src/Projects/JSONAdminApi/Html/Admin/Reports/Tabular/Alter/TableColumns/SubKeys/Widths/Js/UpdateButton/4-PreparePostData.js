let StartFunc = async ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;
    let jVarLocalItemName = jVarLocalCurrentTarget.dataset.item;
    let jVarLocalvoucher = jVarLocalCurrentTarget.dataset.voucher;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalpx = jVarLocalColsestTr.querySelector('[name="px"]');


    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocalpxValue = jVarLocalpx.value;

    let BodyAsJson = {
        px: jVarLocalpxValue
    };
    return await {
        ReportName: jVarLocalItemName,
        DataAttribute: jVarLocalDataAttributeValue,
        TableColumnsPK: jVarLocalvoucher,
        BodyAsJson
    };
};

export { StartFunc };