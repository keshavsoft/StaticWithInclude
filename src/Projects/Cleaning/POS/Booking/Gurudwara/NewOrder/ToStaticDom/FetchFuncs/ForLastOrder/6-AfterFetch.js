let StartFunc = ({ inFromFetch }) => {
    let data = inFromFetch;
    if (data) {
        if (data.KTF === false) {
            return false;
        };

        jFLocalToInnerHtmlOrderNumberId({ inOrderNumberId: Object.keys(data.JsonData)[0] });
    };
};

let jFLocalToInnerHtmlOrderNumberId = ({ inOrderNumberId }) => {
    let jVarLocalHtmlId = 'OrderNumberId';
    let jVarLocalOrderNumberId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderNumberId.innerHTML = inOrderNumberId;
};

export { StartFunc };