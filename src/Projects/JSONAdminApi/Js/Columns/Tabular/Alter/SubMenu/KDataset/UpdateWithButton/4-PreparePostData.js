let StartFunc = ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;

    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalHTMLControlType = jVarLocalColsestTr.querySelector('[name="HTMLControlType"]');
    let jVarLocalStep = jVarLocalColsestTr.querySelector('[name="Step"]');
    let jVarLocalMin = jVarLocalColsestTr.querySelector('[name="Min"]');
    let jVarLocalMax = jVarLocalColsestTr.querySelector('[name="Max"]');

    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocalHTMLControlTypeValue = jVarLocalHTMLControlType.value;
    let jVarLocalStepValue = jVarLocalStep.value;
    let jVarLocalMinValue = jVarLocalMin.value;
    let jVarLocalMaxValue = jVarLocalMax.value;

    let BodyAsJson = {
        DataAttribute: jVarLocalDataAttributeValue,
        HTMLControlType: jVarLocalHTMLControlTypeValue,
        Step: jVarLocalStepValue,
        Min: jVarLocalMinValue,
        Max: jVarLocalMaxValue
    }

    return {
        folderName: jVarLocalFolderName,
        FileName: jVarLocalfilename,
        ItemName: jVarLocalitemname,
        ScreenName: jVarLocalscreenname,
        DataAttribute: jVarLocalDataAttributeValue,
        BodyAsJson
    };
};

export { StartFunc };