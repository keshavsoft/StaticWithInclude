let StartFunc = () => { 
    let jVarLocalCurrentTarget = event.currentTarget;
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
    }
    return BodyAsJson;
};

export { StartFunc };