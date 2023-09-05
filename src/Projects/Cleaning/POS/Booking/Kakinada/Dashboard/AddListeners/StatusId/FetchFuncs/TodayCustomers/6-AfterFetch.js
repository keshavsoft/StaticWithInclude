let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;
    console.log("inFromFetch", inFromFetch);
    var $table = $('#table2')
    $table.bootstrapTable({ data: jVarLocalData });
};

export { StartFunc };