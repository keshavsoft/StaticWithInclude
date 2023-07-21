let StartFunc = async ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;
    let jVarLocalItemName = jVarLocalCurrentTarget.dataset.item;
    let jVarLocalvoucherName = jVarLocalCurrentTarget.dataset.voucher;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalActive = jVarLocalColsestTr.querySelector('[name="Active"]');

    let jVarLocalActiveValue = jVarLocalActive.checked;

    let BodyAsJson = {
        Active: jVarLocalActiveValue
    };

    return await {
        ReportName: jVarLocalItemName,
        VoucherPk: jVarLocalvoucherName,
        BodyAsJson
    };
};

export { StartFunc };