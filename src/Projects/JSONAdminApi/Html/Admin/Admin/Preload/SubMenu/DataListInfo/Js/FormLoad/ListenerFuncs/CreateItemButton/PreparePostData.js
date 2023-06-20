let StartFunc = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalfromkey = jVarLocalCurrentTarget.dataset.fromkey;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalItemName = jVarLocalColsestTr.querySelector('[name="DatalistID"]');

    let jVarLocalItemNameValue = jVarLocalItemName.value;
    let jVarlocalTrimValue = jVarLocalItemNameValue.trim();

    let localBodyAsJson = {
        DatalistID: jVarlocalTrimValue,
    };


    return {
        KeyName: jVarLocalfromkey,
        BodyAsJson: localBodyAsJson

    };
};

export { StartFunc };