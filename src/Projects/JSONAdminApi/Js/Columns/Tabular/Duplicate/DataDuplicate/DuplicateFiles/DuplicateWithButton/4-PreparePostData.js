let StartFunc = ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;

    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalCloneName = jVarLocalColsestTr.querySelector('[name="CloneName"]');

    let jVarLocalCloneNameValue = jVarLocalCloneName.value;

    return {
        folderName: jVarLocalFolderName,
        inFileNameOnly: jVarLocalfilename,
        inToFileName: jVarLocalCloneNameValue
    }
};

export { StartFunc };