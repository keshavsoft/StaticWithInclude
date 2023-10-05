let StartFunc = ({ data }) => {
    let jVarLocalColumns = Object.keys(data);
    let jVarLocalReturnArray = [];
    
    jVarLocalReturnArray.push(jFLocalFirstValue());
    jVarLocalReturnArray.push(jFLocalQrCodeColumn());
    jVarLocalReturnArray.push(jFLocalItemSerialColumn());
    jVarLocalReturnArray.push(jFLocalItemNameColumn());
    jVarLocalReturnArray.push(jFLocalRateColumn());
    jVarLocalReturnArray.push(jFLocalPcsColumn());

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
    return {
        title: 'QrCode',
        field: 'pk'
    }
};

let jFLocalItemSerialColumn = () => {
    return {
        title: 'ItemSerial',
        field: 'ItemSerial'
    }
};

let jFLocalItemNameColumn = () => {
    return {
        title: 'ItemName',
        field: 'ItemName'
    }
};

let jFLocalPcsColumn = () => {
    return {
        title: 'Pcs',
        field: 'Pcs'
    }
};

let jFLocalRateColumn = () => {
    return {
        title: 'Rate',
        field: 'Rate'
    }
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