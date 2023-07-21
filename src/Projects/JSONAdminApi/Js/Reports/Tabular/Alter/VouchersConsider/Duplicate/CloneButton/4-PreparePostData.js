let StartFunc = async ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;

    let jVarLocalreportName = jVarLocalCurrentTarget.dataset.reportname;
    let jVarLocalVouchersConsiderPK = jVarLocalCurrentTarget.dataset.pk;

    return await {
        ReportName: jVarLocalreportName,
        VouchersConsiderPK: jVarLocalVouchersConsiderPK
    };
};

export { StartFunc };