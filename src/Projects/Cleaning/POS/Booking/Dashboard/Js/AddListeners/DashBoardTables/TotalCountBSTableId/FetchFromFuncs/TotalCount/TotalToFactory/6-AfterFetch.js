let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;

    jFLocalToInnerHtmlTotalToFactoryId({ inTotalToFactoryId: jVarLocalData })
};

let jFLocalToInnerHtmlTotalToFactoryId = ({ inTotalToFactoryId }) => {
    let jVarLocalHtmlId = 'TotalToFactoryId';
   let jVarLocalTotalToFactoryId = document.getElementById(jVarLocalHtmlId);
   jVarLocalTotalToFactoryId.innerHTML = inTotalToFactoryId;
};

export { StartFunc };