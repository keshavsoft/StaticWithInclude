let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;
    let inTotalQrCodesId = Object.keys(jVarLocalData).length;

    jFLocalToInnerHtmlTotalQrCodesId({ inTotalQrCodesId })
};

let jFLocalToInnerHtmlTotalQrCodesId = ({ inTotalQrCodesId }) => {
    let jVarLocalHtmlId = 'TotalQrCodesId';
    let jVarLocalTotalQrCodesId = document.getElementById(jVarLocalHtmlId);
    jVarLocalTotalQrCodesId.innerHTML = inTotalQrCodesId;
};

export { StartFunc };