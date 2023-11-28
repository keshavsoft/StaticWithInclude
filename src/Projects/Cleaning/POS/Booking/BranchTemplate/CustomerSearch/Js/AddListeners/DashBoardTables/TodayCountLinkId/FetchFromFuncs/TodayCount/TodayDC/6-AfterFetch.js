let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;

    jFLocalToInnerHtmlTodayDCId({ inTodayDCId: jVarLocalData })
};

let jFLocalToInnerHtmlTodayDCId = ({ inTodayDCId }) => {
    let jVarLocalHtmlId = 'TodayDCId';
   let jVarLocalTodayDCId = document.getElementById(jVarLocalHtmlId);
   jVarLocalTodayDCId.innerHTML = inTodayDCId;
};

export { StartFunc };