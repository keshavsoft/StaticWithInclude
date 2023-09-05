let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;
    console.log("inFromFetch", inFromFetch);
    var $table = $('#table1')
    $table.bootstrapTable({ data: jVarLocalData });
};

export { StartFunc };