let StartFunc = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalColumnName = jVarLocalColsestTr.querySelector('[name="CloneName"]');
    let jVarLocalColumnNameValue = jVarLocalColumnName.value;

    let jVarLocalFromButtonData = jFLocalFromButton({ inCurrentTarget: jVarLocalCurrentTarget });

    return {
        ...jVarLocalFromButtonData,
        inNewKeyName: jVarLocalColumnNameValue
    };
};

const jFLocalFromButton = ({ inCurrentTarget }) => {
    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.preloadkey;

    return {
        fromKeyName: jVarLocalFolderName
    };
};

export { StartFunc };