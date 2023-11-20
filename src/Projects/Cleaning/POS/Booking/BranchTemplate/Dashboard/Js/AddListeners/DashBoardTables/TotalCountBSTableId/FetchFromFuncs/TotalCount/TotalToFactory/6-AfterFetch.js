let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;
    let inTotalQrCodesId = Object.keys(jVarLocalData).length;

    jFLocalToInnerHtmlTotalToFactoryId({ inTotalToFactoryId: inTotalQrCodesId })
};

let jFLocalToInnerHtmlTotalToFactoryId = ({ inTotalToFactoryId }) => {
    let jVarLocalHtmlId = 'TotalToFactoryId';
   let jVarLocalTotalToFactoryId = document.getElementById(jVarLocalHtmlId);
   jVarLocalTotalToFactoryId.innerHTML = inTotalToFactoryId;
};

export { StartFunc };