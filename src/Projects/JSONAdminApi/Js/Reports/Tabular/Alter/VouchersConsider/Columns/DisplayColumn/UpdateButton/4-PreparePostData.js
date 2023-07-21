let StartFunc = async ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;
    let jVarLocalreportname = jVarLocalCurrentTarget.dataset.reportname;
    let jVarLocalvoucherconsiderpk = jVarLocalCurrentTarget.dataset.voucherconsiderpk;
    let jVarLocalColumnPk = jVarLocalCurrentTarget.dataset.columnpk;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalName = jVarLocalColsestTr.querySelector('[name="Name"]');
    let jVarLocalDisplayColumn = jVarLocalColsestTr.querySelector('[name="DisplayColumn"]');
    let jVarLocalTransformType = jVarLocalColsestTr.querySelector('[name="TransformType"]');

    let jVarLocalNameValue = jVarLocalName.value;
    let jVarLocalDisplayColumnValue = jVarLocalDisplayColumn.value;
    let jVarLocalTransformTypeValue = jVarLocalTransformType.value;

    let BodyAsJson = {
        Name: jVarLocalNameValue,
        DisplayColumn: jVarLocalDisplayColumnValue,
        TransformType: jVarLocalTransformTypeValue
    };
    return await {
        reportname: jVarLocalreportname,
        voucherconsiderpk: jVarLocalvoucherconsiderpk,
        columnpk: jVarLocalColumnPk,
        BodyAsJson
    };
};

export { StartFunc };