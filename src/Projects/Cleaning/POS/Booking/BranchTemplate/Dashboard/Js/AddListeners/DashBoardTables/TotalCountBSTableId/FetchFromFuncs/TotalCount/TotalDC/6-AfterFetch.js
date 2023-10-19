let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;

    jFLocalToInnerHtmlTotalDCId({ inTotalDCId: jVarLocalData })
};

let jFLocalToInnerHtmlTotalDCId = ({ inTotalDCId }) => {
    let jVarLocalHtmlId = 'TotalDCId';
   let jVarLocalTotalDCId = document.getElementById(jVarLocalHtmlId);
   jVarLocalTotalDCId.innerHTML = inTotalDCId;
};

export { StartFunc };