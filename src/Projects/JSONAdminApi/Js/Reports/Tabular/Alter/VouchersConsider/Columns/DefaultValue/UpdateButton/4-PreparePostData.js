let StartFunc = async ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;
    let jVarLocalreportname = jVarLocalCurrentTarget.dataset.reportname;
    let jVarLocalvoucherconsiderpk = jVarLocalCurrentTarget.dataset.voucherconsiderpk;
    let jVarLocalColumnPk = jVarLocalCurrentTarget.dataset.columnpk;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDefaultValue = jVarLocalColsestTr.querySelector('[name="DefaultValue"]');

    let jVarLocalDefaultValueValue = jVarLocalDefaultValue.value;

    let BodyAsJson = {
        DefaultValue: jVarLocalDefaultValueValue
    };
    return await {
        reportname: jVarLocalreportname,
        voucherconsiderpk: jVarLocalvoucherconsiderpk,
        columnpk: jVarLocalColumnPk,
        BodyAsJson
    };
};

export { StartFunc };