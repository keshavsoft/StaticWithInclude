let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;
    console.log("inFromFetch9899", jVarLocalData);
    // var $table = $('#NewCustomersTable')
    // $table.bootstrapTable({ data: jVarLocalData });
    var template = Handlebars.compile(jFLocalFromDomNewCustomerTemplateRow());
    // console.log(template( jVarLocalData));
    let jVarLocalHtmlId = 'NewCustomersTable';
    let jVarLocalNewCustomersTable = document.getElementById(jVarLocalHtmlId);
    console.log("jVarLocalNewCustomersTable",jVarLocalNewCustomersTable);
    jVarLocalNewCustomersTable.querySelector('tbody').innerHTML = template( jVarLocalData);

};

let jFLocalFromDomNewCustomerTemplateRow = () => {
    let jVarLocalHtmlNewCustomerTemplateRow = 'NewCustomerTemplateRow';
   let jVarHtmlNewCustomerTemplateRow = document.getElementById(jVarLocalHtmlNewCustomerTemplateRow);
   let jVarHtmlNewCustomerTemplateRowValue = jVarHtmlNewCustomerTemplateRow.innerHTML.trim();
   return jVarHtmlNewCustomerTemplateRowValue;
};


export { StartFunc };