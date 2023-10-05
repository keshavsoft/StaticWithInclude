let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;
    var $table = $('#TodayCustomersTable')
    $table.bootstrapTable({ data: jVarLocalData });
};

export { StartFunc };