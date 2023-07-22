let StartFunc = async ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;
    let jVarLocalreportname = jVarLocalCurrentTarget.dataset.reportname;
    let jVarLocalvoucherconsiderpk = jVarLocalCurrentTarget.dataset.voucherconsiderpk;
    let jVarLocalColumnPk = jVarLocalCurrentTarget.dataset.columnpk;
    
    return await {
        ReportName: jVarLocalreportname,
        VoucherConsiderPK: jVarLocalvoucherconsiderpk,
        ColumnPk: jVarLocalColumnPk
    };
};

export { StartFunc };