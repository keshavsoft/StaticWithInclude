let StartFunc = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalfromkey = jVarLocalCurrentTarget.dataset.fromkey;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalItemName = jVarLocalColsestTr.querySelector('[name="DatalistID"]');

    let jVarLocalItemNameValue = jVarLocalItemName.value;

    let localBodyAsJson = {
        DatalistID: jVarLocalItemNameValue,
    };


    return {
        KeyName: jVarLocalfromkey,
        BodyAsJson: localBodyAsJson

    };
};

export { StartFunc };