let StartFunc = ({ inCurrentTarget }) => {
    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfilename = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalitemname = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;
    let jVarLocalsubtablecolumnkey = jVarLocalCurrentTarget.dataset.subtablecolumnkey;
    let jVarLocaltablecolumnkey = jVarLocalCurrentTarget.dataset.tablecolumnkey;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalonkeypress = jVarLocalColsestTr.querySelector('[name="onkeypress"]');
    let jVarLocalEnterOnClient = jVarLocalColsestTr.querySelector('[name="EnterOnClient"]');
    let jVarLocalCustomDataList = jVarLocalColsestTr.querySelector('[name="CustomDataList"]');

    let jVarLocalType = jVarLocalColsestTr.querySelector('[name="ClientEval"]');

    let jVarLocalonkeypressValue = jVarLocalonkeypress.checked;
    let jVarLocalEnterOnClientValue = jVarLocalEnterOnClient.checked;
    let jVarLocalCustomDataListValue = jVarLocalCustomDataList.checked;

    let jVarLocalTypeValue = jVarLocalType.value;

    let BodyAsJson = {
        CustomDataList: jVarLocalCustomDataListValue,
        onkeypress: jVarLocalonkeypressValue,

        EnterOnClient: jVarLocalEnterOnClientValue,

        ClientEval: jVarLocalTypeValue
    };

    return {
        folderName: jVarLocalFolderName,
        FileName: jVarLocalfilename,
        ItemName: jVarLocalitemname,
        ScreenName: jVarLocalscreenname,
        DataAttribute: jVarLocaltablecolumnkey,
        subtablecolumnkey: jVarLocalsubtablecolumnkey,
        BodyAsJson
    };
};

export { StartFunc };