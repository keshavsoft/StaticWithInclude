import { StartFunc as StartFuncItemDetails } from "../../FormLoad/ItemDetails/EntryFile.js";

let StartFunc = async({ inDataToShow }) => {
    let jVarLocalDataToShow = inDataToShow;
    jVarGlobalPresentViewData = await StartFuncItemDetails();

    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);
    jVarLocaltableHeadRow.appendChild(jFLocalpkColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalVoucherNumberColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalDateColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalDescriptionColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalItemsColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalScanColumn());

    var $table = $('#table');
    $table.bootstrapTable({
        data: jVarLocalDataToShow.DataFromServer[0].KData.TableData,
    });
    // let elements = Object.keys(jVarGlobalPresentViewData.JsonData).forEach(element => {
    //     console.log("element",element);
    // });
};

let jFLocalpkColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "pk";
    jVarLocalNewTh.dataset.field = "pk";
    jVarLocalNewTh.setAttribute("data-filter-control", "input")
    return jVarLocalNewTh;
};

let jFLocalVoucherNumberColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "VoucherNumber";
    jVarLocalNewTh.dataset.field = "VoucherNumber";
    jVarLocalNewTh.setAttribute("data-filter-control", "input")
    return jVarLocalNewTh;
};

let jFLocalDateColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Date";
    jVarLocalNewTh.dataset.field = "Date";
    jVarLocalNewTh.setAttribute("data-filter-control", "select")
    return jVarLocalNewTh;
};

let jFLocalDescriptionColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Description";
    jVarLocalNewTh.dataset.field = "Description";
    jVarLocalNewTh.setAttribute("data-filter-control", "input")
    return jVarLocalNewTh;
};

let jFLocalItemsColumn = () => {
    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Items";
    jVarLocalNewTh.setAttribute("data-formatter", "ItemsFormatter")
    return jVarLocalNewTh;
};

let jFLocalScanColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Scan";
    jVarLocalNewTh.dataset.field = "operate"
    jVarLocalNewTh.setAttribute("data-formatter", "operateFormatter")

    return jVarLocalNewTh;
};

function operateFormatter(value, row, index) {
    return [
        `<a class="like" href="../../Scan/NoAlert/NoAlert.html?VoucherRef=1" title="Like">`,
        '<i class="fa fa-heart">Save</i>',
        '</a>  ',
        '<a class="remove" href="javascript:void(0)" title="Remove">',
        '<i class="fa fa-trash"></i>',
        '</a>'
    ].join('')
};

export { StartFunc }