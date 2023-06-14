let StartFunc = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalfromkey = jVarLocalCurrentTarget.dataset.fromkey;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalUserFolderName = jVarLocalColsestTr.querySelector('[name="UserFolderName"]');
    let jVarLocalinFolderName = jVarLocalColsestTr.querySelector('[name="inFolderName"]');
    let jVarLocalinJsonFileName = jVarLocalColsestTr.querySelector('[name="inJsonFileName"]');

    let jVarLocalUserFolderNameValue = jVarLocalUserFolderName.value;
    let jVarLocaljVarLocalinFolderName = jVarLocalinFolderName.value;
    let jVarLocaljVarLocalinJsonFileName = jVarLocalinJsonFileName.value;

    let localBodyAsJson = {
        UserFolderName: jVarLocalUserFolderNameValue,
        inFolderName: jVarLocaljVarLocalinFolderName,
        inJsonFileName: jVarLocaljVarLocalinJsonFileName
    };


    return {
        KeyName: jVarLocalfromkey,
        BodyAsJson: localBodyAsJson

    };
};

export { StartFunc };