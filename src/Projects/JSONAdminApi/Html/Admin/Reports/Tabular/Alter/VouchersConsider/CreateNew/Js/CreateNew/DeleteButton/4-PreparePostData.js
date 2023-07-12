let StartFunc = async ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;
    let jVarLocalreportname = jVarLocalCurrentTarget.dataset.reportname;
    let jVarLocalvoucherpk = jVarLocalCurrentTarget.dataset.voucherpk;

    return await {
        ReportName: jVarLocalreportname,
        VoucherPk: jVarLocalvoucherpk
    };
};

export { StartFunc };