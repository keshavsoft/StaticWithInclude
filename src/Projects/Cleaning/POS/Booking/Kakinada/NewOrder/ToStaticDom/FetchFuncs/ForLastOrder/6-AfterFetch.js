let StartFunc = ({ inFromFetch }) => {
    let data = inFromFetch;
    if (data) {
        if (data.KTF === false) {
            return false;
        };
        let inOrderNumberId = Object.keys(data.JsonData)[0];
        if (Object.keys(data.JsonData)[0] === undefined) {
            inOrderNumberId = 0;
        }
        jFLocalToInnerHtmlOrderNumberId({ inOrderNumberId });
    };
};

let jFLocalToInnerHtmlOrderNumberId = ({ inOrderNumberId }) => {
    let jVarLocalHtmlId = 'OrderNumberId';
    let jVarLocalOrderNumberId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderNumberId.innerHTML = inOrderNumberId;
};

export { StartFunc };