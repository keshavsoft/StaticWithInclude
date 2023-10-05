let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;
    var template = Handlebars.compile(jFLocalFromDomLatestOrdersTableTemplateRow());

    let jVarLocalHtmlId = 'LatestQrCodesTable';
    let jVarLocalLatestOrdersTable = document.getElementById(jVarLocalHtmlId);
    jVarLocalLatestOrdersTable.querySelector('tbody').innerHTML = template(jVarLocalData);
};

let jFLocalFromDomLatestOrdersTableTemplateRow = () => {
    let jVarLocalHtmlLatestOrdersTableTemplateRow = 'LatestQrCodesTemplateRow';
    let jVarLatestOrdersTableTemplateRow = document.getElementById(jVarLocalHtmlLatestOrdersTableTemplateRow);
    let jVarLatestOrdersTableTemplateRowValue = jVarLatestOrdersTableTemplateRow.innerHTML.trim();
    return jVarLatestOrdersTableTemplateRowValue;
};

let jFLocalInsertQrCodeData = ({ inData , inQrCodeData }) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {

        element.QrCodes = inQrCodeData[element.pk];
        element.IsQrCodesRaised = false;
        if (element.pk in inQrCodeData) {
            element.IsQrCodesRaised = true;
        };

        return element;
    });
    return jVarLocalReturnArray;
};


let jFLocalInsertAggValues = ({ inData }) => {
    let jVarLocalReturnObject = [];

    jVarLocalReturnObject = Object.entries(inData).map(element => {
        element[1].AggValues = {};
        element[1].AggValues.ItemDetails = `${Object.keys(element[1].ItemsInOrder).length} / ${Object.values(element[1].ItemsInOrder).map(p => p.Pcs).reduce((acc, val) => acc + val)}`;
        element[1].AggValues.SettlementAmount = element[1].CheckOutData.CardAmount + element[1].CheckOutData.CashAmount + element[1].CheckOutData.UPIAmount;
        element[1].IsSettled = false;

        if (Object.keys(element[1].CheckOutData).length > 0) {
            element[1].IsSettled = true;
        };
        // CheckOutData


        return element[1];
    });

    return jVarLocalReturnObject;
};


export { StartFunc };