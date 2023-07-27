let StartFunc = async ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;
    let jVarLocalreportname = jVarLocalCurrentTarget.dataset.reportname;
    let jVarLocalvoucherconsiderpk = jVarLocalCurrentTarget.dataset.voucherconsiderpk;
    let jVarLocalColumnPk = jVarLocalCurrentTarget.dataset.columnpk;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalWidths = jVarLocalColsestTr.querySelector('[name="Widths"]');

    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocalWidthsValue = jVarLocalWidths.value;

    let BodyAsJson = {
        Widths: jVarLocalWidthsValue
    };
    return await {
        reportname: jVarLocalreportname,
        voucherconsiderpk: jVarLocalvoucherconsiderpk,
        columnpk: jVarLocalColumnPk,
        DataAttribute: jVarLocalDataAttributeValue,
        BodyAsJson
    };
};

export { StartFunc };