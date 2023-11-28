let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;

    jFLocalToInnerHtmlTodayOrderId({ inTodayOrderId: jVarLocalData })
};

let jFLocalToInnerHtmlTodayOrderId = ({ inTodayOrderId }) => {
    let jVarLocalHtmlId = 'TodayOrderId';
   let jVarLocalTodayOrderId = document.getElementById(jVarLocalHtmlId);
   jVarLocalTodayOrderId.innerHTML = inTodayOrderId;
};

export { StartFunc };