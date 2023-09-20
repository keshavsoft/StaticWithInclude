let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;
    console.log("inFromFetch9899", jVarLocalData);
    // var $table = $('#NewCustomersTable')
    // $table.bootstrapTable({ data: jVarLocalData });
    var template = Handlebars.compile(jFLocalFromDomLatestOrdersTableTemplateRow());
    console.log("hi",template);
    let jVarLocalHtmlId = 'LatestOrdersTable';
    let jVarLocalLatestOrdersTable = document.getElementById(jVarLocalHtmlId);
    console.log("jVarLocalLatestOrdersTable",jVarLocalLatestOrdersTable);
    console.log("jVarLocalNewCustomersTable",jVarLocalLatestOrdersTable);
    jVarLocalLatestOrdersTable.querySelector('tbody').innerHTML = template(jFLocalInsertAggValues({inData: jVarLocalData}));

};

let jFLocalFromDomLatestOrdersTableTemplateRow = () => {
    let jVarLocalHtmlLatestOrdersTableTemplateRow = 'LatestOrdersTemplateRow';
   let jVarLatestOrdersTableTemplateRow = document.getElementById(jVarLocalHtmlLatestOrdersTableTemplateRow);
   let jVarLatestOrdersTableTemplateRowValue = jVarLatestOrdersTableTemplateRow.innerHTML.trim();
   return jVarLatestOrdersTableTemplateRowValue;
};

let jFLocalInsertAggValues = ({ inData }) => {
    let jVarLocalReturnObject = {};

    jVarLocalReturnObject = Object.fromEntries(Object.entries(inData).map(element => {
        element[1].AggValues = {};
        element[1].AggValues.ItemDetails = `${Object.keys(element[1].ItemsInOrder).length} / ${Object.values(element[1].ItemsInOrder).map(p => p.Pcs).reduce((acc, val) => acc + val)}`;
        element[1].AggValues.SettlementAmount = element[1].CheckOutData.CardAmount + element[1].CheckOutData.CashAmount + element[1].CheckOutData.UPIAmount;

        return element;
    }));

    return jVarLocalReturnObject;
};


export { StartFunc };