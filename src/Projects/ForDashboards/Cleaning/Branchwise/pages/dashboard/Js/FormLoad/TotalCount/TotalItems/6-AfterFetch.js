let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;

    jFLocalToInnerHtmlTotalOrderId({ inTotalOrderId: jVarLocalData })
};

let jFLocalToInnerHtmlTotalOrderId = ({ inTotalOrderId }) => {
    let jVarLocalHtmlId = 'ItemsId';
    let jVarLocalTotalOrderId = document.getElementById(jVarLocalHtmlId);

    if (inTotalOrderId === undefined === false) {
        jVarLocalTotalOrderId.innerHTML = inTotalOrderId;

    } else {
        jVarLocalTotalOrderId.innerHTML = "0"
    }

};

export { StartFunc };