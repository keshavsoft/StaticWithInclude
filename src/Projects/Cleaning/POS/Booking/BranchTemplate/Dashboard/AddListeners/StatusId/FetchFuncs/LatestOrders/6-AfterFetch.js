let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;
    var template = Handlebars.compile(jFLocalFromDomLatestOrdersTableTemplateRow());

    let jVarLocalHtmlId = 'LatestOrdersTable';
    let jVarLocalLatestOrdersTable = document.getElementById(jVarLocalHtmlId);
    let jVarLocalTransformedData = jFLocalInsertAggValues({ inData: jVarLocalData });
    console.log("jVarLocalTransformedData : ", jVarLocalTransformedData);
    jVarLocalLatestOrdersTable.querySelector('tbody').innerHTML = template(jVarLocalTransformedData);
};

let jFLocalFromDomLatestOrdersTableTemplateRow = () => {
    let jVarLocalHtmlLatestOrdersTableTemplateRow = 'LatestOrdersTemplateRow';
    let jVarLatestOrdersTableTemplateRow = document.getElementById(jVarLocalHtmlLatestOrdersTableTemplateRow);
    let jVarLatestOrdersTableTemplateRowValue = jVarLatestOrdersTableTemplateRow.innerHTML.trim();
    return jVarLatestOrdersTableTemplateRowValue;
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