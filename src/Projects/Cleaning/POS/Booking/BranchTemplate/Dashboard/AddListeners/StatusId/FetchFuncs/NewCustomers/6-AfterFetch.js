let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;
    var template = Handlebars.compile(jFLocalFromDomNewCustomerTemplateRow());
    let jVarLocalHtmlId = 'NewCustomersTable';
    let jVarLocalNewCustomersTable = document.getElementById(jVarLocalHtmlId);
    jVarLocalNewCustomersTable.querySelector('tbody').innerHTML = template( jVarLocalData);

};

let jFLocalFromDomNewCustomerTemplateRow = () => {
    let jVarLocalHtmlNewCustomerTemplateRow = 'NewCustomerTemplateRow';
   let jVarHtmlNewCustomerTemplateRow = document.getElementById(jVarLocalHtmlNewCustomerTemplateRow);
   let jVarHtmlNewCustomerTemplateRowValue = jVarHtmlNewCustomerTemplateRow.innerHTML.trim();
   return jVarHtmlNewCustomerTemplateRowValue;
};


export { StartFunc };