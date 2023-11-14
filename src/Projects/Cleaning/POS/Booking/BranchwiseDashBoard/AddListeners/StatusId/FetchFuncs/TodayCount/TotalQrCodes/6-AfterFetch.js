let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;
    // let inTodayQrCodesId = Object.keys(jVarLocalData).length
    jFLocalToInnerHtmlTodayQrCodesId({ inTodayQrCodesId: jVarLocalData })
};

let jFLocalToInnerHtmlTodayQrCodesId = ({ inTodayQrCodesId }) => {
    let jVarLocalHtmlId = 'TodayQrCodesId';
   let jVarLocalTodayQrCodesId = document.getElementById(jVarLocalHtmlId);
   jVarLocalTodayQrCodesId.innerHTML = inTodayQrCodesId;
};

export { StartFunc };