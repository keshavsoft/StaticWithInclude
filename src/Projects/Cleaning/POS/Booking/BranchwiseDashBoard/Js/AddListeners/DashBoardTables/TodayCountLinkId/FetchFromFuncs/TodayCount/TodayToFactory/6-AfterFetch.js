let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;

    jFLocalToInnerHtmlTodayToFactoryId({ inTodayToFactoryId: jVarLocalData })
};

let jFLocalToInnerHtmlTodayToFactoryId = ({ inTodayToFactoryId }) => {
    let jVarLocalHtmlId = 'TodayToFactoryId';
   let jVarLocalTodayToFactoryId = document.getElementById(jVarLocalHtmlId);
   jVarLocalTodayToFactoryId.innerHTML = inTodayToFactoryId;
};

export { StartFunc };