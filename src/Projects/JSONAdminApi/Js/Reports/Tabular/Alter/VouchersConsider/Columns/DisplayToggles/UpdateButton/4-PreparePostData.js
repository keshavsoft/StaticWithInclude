let StartFunc = async ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;
    let jVarLocalreportname = jVarLocalCurrentTarget.dataset.reportname;
    let jVarLocalvoucherconsiderpk = jVarLocalCurrentTarget.dataset.voucherconsiderpk;
    let jVarLocalColumnPk = jVarLocalCurrentTarget.dataset.columnpk;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalConsiderJoinTable = jVarLocalColsestTr.querySelector('[name="ConsiderJoinTable"]');
    let jVarLocalTransformTF = jVarLocalColsestTr.querySelector('[name="TransformTF"]');

    let jVarLocalConsiderJoinTableValue = jVarLocalConsiderJoinTable.checked;
    let jVarLocalTransformTFValue = jVarLocalTransformTF.checked;

    let BodyAsJson = {
        ConsiderJoinTable: jVarLocalConsiderJoinTableValue,
        TransformTF: jVarLocalTransformTFValue
    };
    return await {
        reportname: jVarLocalreportname,
        voucherconsiderpk: jVarLocalvoucherconsiderpk,
        columnpk: jVarLocalColumnPk,
        BodyAsJson
    };
};

export { StartFunc };