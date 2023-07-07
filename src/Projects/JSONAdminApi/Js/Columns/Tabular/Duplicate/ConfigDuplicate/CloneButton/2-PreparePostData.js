let StartFunc = async ({ inProjectName, inevent }) => {
    let jVarLocalCurrentTarget = inevent.currentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalCloneName = jVarLocalColsestTr.querySelector('[name="CloneName"]');

    let jVarLocalCloneNameValue = jVarLocalCloneName.value;

    

};

export { StartFunc };