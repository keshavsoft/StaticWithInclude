let StartFunc = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalfromkey = jVarLocalCurrentTarget.dataset.fromkey;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalinFolderName = jVarLocalColsestTr.querySelector('[name="inFolderName"]');
    let jVarLocalinJsonFileName = jVarLocalColsestTr.querySelector('[name="inJsonFileName"]');

    let jVarLocaljVarLocalinFolderName = jVarLocalinFolderName.value;
    let jVarLocaljVarLocalinJsonFileName = jVarLocalinJsonFileName.value;

    let localBodyAsJson = {
        inFolderName: jVarLocaljVarLocalinFolderName,
        inJsonFileName: jVarLocaljVarLocalinJsonFileName
    };


    return {
        KeyName: jVarLocalfromkey,
        BodyAsJson: localBodyAsJson

    };
};

export { StartFunc };