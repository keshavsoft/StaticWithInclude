let StartFunc = () => {
    let jVarLocalReturnArray = [];
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);
    jVarLocaltableHeadRow.appendChild(jFLocalQrCodeColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalItemSerialColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalItemNameColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalRateColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalPcsColumn());

    // jVarLocalReturnArray.push(jFLocalFirstValue());
    // jVarLocalReturnArray.push(jFLocalQrCodeColumn());
    // jVarLocalReturnArray.push(jFLocalItemSerialColumn());
    // jVarLocalReturnArray.push(jFLocalItemNameColumn());
    // jVarLocalReturnArray.push(jFLocalRateColumn());
    // jVarLocalReturnArray.push(jFLocalPcsColumn());

    // jVarLocalReturnArray.push(...jVarLocalColumns.map(element => {
    //     return {
    //         title: element,
    //         field: element
    //     };
    // }));
    
    // jVarLocalReturnArray.push(jFLocalLastValue());
    return jVarLocalReturnArray;
};

let jFLocalFirstValue = () => {
    return {
        title: '#',
        formatter: SerialFormatter
    }
};

let jFLocalQrCodeColumn = () => {
    
        let jVarLocalNewTh = document.createElement("th");
        jVarLocalNewTh.innerHTML = "QrCode";
        jVarLocalNewTh.dataset.field = "pk";
        jVarLocalNewTh.setAttribute("data-filter-control", "input")
        return jVarLocalNewTh;
};

let jFLocalItemSerialColumn = () => {
    
    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "ItemSerial";
    jVarLocalNewTh.dataset.field = "ItemSerial";
    jVarLocalNewTh.setAttribute("data-filter-control", "select")
    return jVarLocalNewTh;
};

let jFLocalItemNameColumn = () => {
    
    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "ItemName";
    jVarLocalNewTh.dataset.field = "ItemName";
    jVarLocalNewTh.setAttribute("data-filter-control", "select")
    return jVarLocalNewTh;
};

let jFLocalPcsColumn = () => {
    
    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Pcs";
    jVarLocalNewTh.dataset.field = "Pcs";
    jVarLocalNewTh.setAttribute("data-filter-control", "input")
    return jVarLocalNewTh;
};

let jFLocalRateColumn = () => {
   
    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Rate";
    jVarLocalNewTh.dataset.field = "Rate";
    jVarLocalNewTh.setAttribute("data-filter-control", "input")
    return jVarLocalNewTh;
};

let jFLocalLastValue = () => {
    return {
        field: 'operate',
        title: 'Item Operate',
        align: 'center',
        clickToSelect: false,
        events: window.operateEvents,
        formatter: operateFormatter
    }
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

function SerialFormatter(value, row, index) {
    return index+1;
};
export { StartFunc }