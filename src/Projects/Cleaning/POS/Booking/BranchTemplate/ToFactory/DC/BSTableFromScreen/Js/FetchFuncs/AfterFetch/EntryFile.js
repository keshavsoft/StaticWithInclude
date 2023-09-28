let StartFunc = ({ inDataToShow }) => {
    let jVarLocalDataToShow = inDataToShow;
    // jFLocalPrepareHeaderForDataOnly({ data: jVarLocalDataToShow })
    var $table = $('#table');
    let jVarLocalColumns = [];
    jVarLocalColumns.push({
        field: 'pk',
        title: 'pk'
    });
    jVarLocalColumns.push({
        field: 'VoucherNumber',
        title: 'VoucherNumber'
    });
    jVarLocalColumns.push({
        field: 'Date',
        title: 'Date'
    });
    jVarLocalColumns.push({
        field: 'Description',
        title: 'Description',
        checkbox: true
    });
    jVarLocalColumns.push({
        field: 'Description',
        title: 'Description',
        formatter: operateFormatter
    });
    // $table.bootstrapTable({ data: jVarLocalDataToShow.DataFromServer[0].KData.TableData });
    $table.bootstrapTable({
        data: jVarLocalDataToShow.DataFromServer[0].KData.TableData,
        columns: jVarLocalColumns
    });

};
function operateFormatter(value, row, index) {
    console.log("pk",value, row, index);
    return [
        `<a class="like" href="../../Scan/VerticalFromConfigJson/VerticalFromConfigJson.html?VoucherRef=${row.pk}" title="Like">`,
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