import { StartFunc as StartFuncFromLocalStorage } from "../../../../../../../Booking/FromLocalStorage/Customers/AsArray.js";

let StartFunc = () => {
    let jVarLocalDataToShow = StartFuncFromLocalStorage();
    jFLocalPrepareHeaderForDataOnly({ data: jVarLocalDataToShow })
    var $table = $('#table');
    $table.bootstrapTable({ data: jVarLocalDataToShow});
    
};

let jFLocalPrepareHeaderForDataOnly = ({data}) => {
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);
    let jVarLocalColumns = Object.keys(data[0]);
    jVarLocalColumns.forEach(element => {
        let jVarLocalNewTh = document.createElement("th");
        jVarLocalNewTh.innerHTML = element;
        jVarLocalNewTh.dataset.field = element;
        jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
    });
}

export { StartFunc }