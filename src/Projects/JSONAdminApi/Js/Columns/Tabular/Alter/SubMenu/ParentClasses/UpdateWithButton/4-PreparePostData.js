let StartFunc = ({ CurrentTarget }) => {
    let jVarLocalCurrentTarget = CurrentTarget;

    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalDataAttribute = jVarLocalColsestTr.querySelector('[name="DataAttribute"]');
    let jVarLocalParent1Class = jVarLocalColsestTr.querySelector('[name="Parent1Class"]');
    let jVarLocalParent2Class = jVarLocalColsestTr.querySelector('[name="Parent2Class"]');
    let jVarLocalParent3Class = jVarLocalColsestTr.querySelector('[name="Parent3Class"]');
    let jVarLocalInputClass = jVarLocalColsestTr.querySelector('[name="InputClass"]');

    let jVarLocalDataAttributeValue = jVarLocalDataAttribute.value;
    let jVarLocaljVarLocalParent1ClassValue = jVarLocalParent1Class.value;
    let jVarLocaljVarLocalParent2ClassValue = jVarLocalParent2Class.value;
    let jVarLocaljVarLocalParent3ClassValue = jVarLocalParent3Class.value;
    let jVarLocaljVarLocalInputClassValue = jVarLocalInputClass.value;

    let BodyAsJson = {
        Parent1Class: jVarLocaljVarLocalParent1ClassValue,
        Parent2Class: jVarLocaljVarLocalParent2ClassValue,
        Parent3Class: jVarLocaljVarLocalParent3ClassValue,
        InputClass: jVarLocaljVarLocalInputClassValue
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