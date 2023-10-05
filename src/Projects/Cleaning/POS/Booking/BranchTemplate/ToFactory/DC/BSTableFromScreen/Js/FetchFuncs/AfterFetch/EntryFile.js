let StartFunc = ({ inDataToShow }) => {
    let jVarLocalDataToShow = inDataToShow;
    // jFLocalPrepareHeaderForDataOnly({ data: jVarLocalDataToShow })

    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);
    jVarLocaltableHeadRow.appendChild(jFLocalpkColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalVoucherNumberColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalDateColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalDescriptionColumn());
    jVarLocaltableHeadRow.appendChild(jFLocalScanColumn());

    var $table = $('#table');
    // let jVarLocalColumns = [];
    // jVarLocalColumns.push({
    //     field: 'pk',
    //     title: 'pk'
    // });
    // jVarLocalColumns.push({
    //     field: 'VoucherNumber',
    //     title: 'VoucherNumber'
    // });
    // jVarLocalColumns.push({
    //     field: 'Date',
    //     title: 'Date'
    // });
    // jVarLocalColumns.push({
    //     field: 'Description',
    //     title: 'Description',
    //     checkbox: true
    // });
    // jVarLocalColumns.push({
    //     field: 'Description',
    //     title: 'Description',
    //     formatter: operateFormatter
    // });
    // $table.bootstrapTable({ data: jVarLocalDataToShow.DataFromServer[0].KData.TableData });
    $table.bootstrapTable({
        data: jVarLocalDataToShow.DataFromServer[0].KData.TableData,
    });

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

let jFLocalScanColumn = () => {

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Scan";
    jVarLocalNewTh.dataset.field = "operate"
    jVarLocalNewTh.setAttribute("data-filter-control", "input")
    jVarLocalNewTh.setAttribute("data-formatter", "operateFormatter")
    
    return jVarLocalNewTh;
    };

function operateFormatter(value, row, index) {
    return [
        `<a class="like" href="../../Scan/VerticalFromConfigJson/VerticalFromConfigJson.html?VoucherRef=1" title="Like">`,
        '<i class="fa fa-heart">Save</i>',
        '</a>  ',
        '<a class="remove" href="javascript:void(0)" title="Remove">',
        '<i class="fa fa-trash"></i>',
        '</a>'
    ].join('')
};


let jFLocalPrepareHeaderForDataOnly = ({ data }) => {
    console.log("data", data);
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);
    let jVarLocalColumns = data.DataFromServer[0].KData.TableColumns;
    jVarLocalColumns.forEach(element => {
        let jVarLocalNewTh = document.createElement("th");
        jVarLocalNewTh.innerHTML = element.DisplayName;
        jVarLocalNewTh.dataset.field = element.DataAttribute;
        jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
    });
}

export { StartFunc }