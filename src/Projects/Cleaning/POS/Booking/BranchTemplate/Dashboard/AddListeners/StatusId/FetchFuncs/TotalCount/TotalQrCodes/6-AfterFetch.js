let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;

    jFLocalToInnerHtmlTotalQrCodesId({ inTotalQrCodesId: jVarLocalData })
};

let jFLocalToInnerHtmlTotalQrCodesId = ({ inTotalQrCodesId }) => {
    let jVarLocalHtmlId = 'TotalQrCodesId';
    let jVarLocalTotalQrCodesId = document.getElementById(jVarLocalHtmlId);
    jVarLocalTotalQrCodesId.innerHTML = inTotalQrCodesId;
};

export { StartFunc };