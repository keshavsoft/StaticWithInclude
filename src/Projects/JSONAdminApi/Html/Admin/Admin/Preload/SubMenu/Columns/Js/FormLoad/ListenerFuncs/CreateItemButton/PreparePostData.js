let StartFunc = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalfromkey = jVarLocalCurrentTarget.dataset.fromkey;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalItemName = jVarLocalColsestTr.querySelector('[name="Columns"]');

    let jVarLocalItemNameValue = jVarLocalItemName.value;
    let jVarlocalTrimValue = jVarLocalItemNameValue.trim();
    let localBodyAsJson = {
        Columns: jVarlocalTrimValue,
    };


    return {
        KeyName: jVarLocalfromkey,
        BodyAsJson: localBodyAsJson

    };
};

export { StartFunc };