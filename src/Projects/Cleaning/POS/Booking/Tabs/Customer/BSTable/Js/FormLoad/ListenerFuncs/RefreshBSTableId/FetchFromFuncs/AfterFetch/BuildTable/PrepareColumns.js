import { StartFunc as StartFuncColumnCustomerName } from "./TableColumns/ColumnCustomerName.js";
import { StartFunc as StartFuncColumnCustomerCity } from "./TableColumns/ColumnCustomerCity.js";
import { StartFunc as StartFuncColumnCustomerMobile } from "./TableColumns/ColumnCustomerMobile.js";
import { StartFunc as StartFuncColumnPk } from "./TableColumns/ColumnPk.js";
import { StartFunc as StartFuncColumnSerialNumber } from "./TableColumns/ColumnSerialNumber.js";

let StartFunc = () => {

    StartFuncColumnSerialNumber();
    StartFuncColumnPk();
    StartFuncColumnCustomerName();
    StartFuncColumnCustomerCity();
    StartFuncColumnCustomerMobile();
    
};

function operateFormatter(value, row, index) {
    return [
        '<a class="like" href="#" onclick="jFLocal1()" title="Like">',
        '<i class="fa fa-heart">Show</i>',
        '</a>  ',
        `<a class="KSMainTableRowDelete" data-pk=${row.pk} href="#" title="Remove">`,
        '<i class="fa fa-trash">Delete</i>',
        '</a>',
    ].join('')
};

function kFormatter(value, row, index) {
    return value;
};

let jFLocalSerialColumn = (value, row, index) => {
    return index + 1;
};

export { StartFunc };









// let StartFunc = ({ data }) => {
//     console.log("data",data);
//     let jVarLocalColumns = data;
//     jFLocalPrepareHeaderForDataOnly({ inDataToShow: jVarLocalColumns })
// };

// let jFLocalPrepareHeaderForDataOnly = (inDataToShow) => {
//     let jVarLocalHtmlId = 'tableHeadRow';
//     let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);

//     let jVarLocalColumns = inDataToShow;

//     let jVarLocalNewTh = document.createElement("th");
//     jVarLocalNewTh.innerHTML = "#";
//     jVarLocalNewTh.dataset.field = "";
//     jVarLocalNewTh.setAttribute("data-formatter", "kFormatter")
//     jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);

//     jVarLocalColumns.forEach(element => {
//         let jVarLocalNewTh = document.createElement("th");
//         jVarLocalNewTh.innerHTML = element.DisplayName;
//         jVarLocalNewTh.dataset.field = element.DataAttribute;
//         jVarLocalNewTh.setAttribute("data-filter-control", "select")
//         jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
//     });
// }

// function operateFormatter(value, row, index) {
//     return [
//         '<a class="like" href="#" onclick="jFLocal1()" title="Like">',
//         '<i class="fa fa-heart">Show</i>',
//         '</a>  ',
//         `<a class="KSMainTableRowDelete" data-pk=${row.pk} href="#" title="Remove">`,
//         '<i class="fa fa-trash">Delete</i>',
//         '</a>',
//     ].join('')
// };

// function kFormatter(value, row, index) {
//     return value;
// };

// let jFLocalSerialColumn = (value, row, index) => {
//     return index + 1;
// };

// export { StartFunc };