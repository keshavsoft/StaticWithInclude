let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;
    let inTotalQrCodesId = Object.keys(jVarLocalData).length;


    jFLocalToInnerHtmlTotalDCId({ inTotalDCId: inTotalQrCodesId })
};

let jFLocalToInnerHtmlTotalDCId = ({ inTotalDCId }) => {
    let jVarLocalHtmlId = 'TotalDCId';
    let jVarLocalTotalDCId = document.getElementById(jVarLocalHtmlId);
    jVarLocalTotalDCId.innerHTML = inTotalDCId;
};

export { StartFunc };