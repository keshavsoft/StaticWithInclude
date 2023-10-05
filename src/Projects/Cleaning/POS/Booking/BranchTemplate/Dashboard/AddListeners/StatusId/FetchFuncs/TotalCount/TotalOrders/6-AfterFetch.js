let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;

    jFLocalToInnerHtmlTotalOrderId({ inTotalOrderId: jVarLocalData })
};

let jFLocalToInnerHtmlTotalOrderId = ({ inTotalOrderId }) => {
    let jVarLocalHtmlId = 'TotalOrderId';
   let jVarLocalTotalOrderId = document.getElementById(jVarLocalHtmlId);
   jVarLocalTotalOrderId.innerHTML = inTotalOrderId;
};

export { StartFunc };