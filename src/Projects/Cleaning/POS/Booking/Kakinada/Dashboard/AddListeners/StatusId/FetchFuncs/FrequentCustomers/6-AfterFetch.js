let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;
    console.log("inFromFetch", inFromFetch);
    var $table = $('#FrequentCustomersTable')
    $table.bootstrapTable({ data: jVarLocalData });
};

export { StartFunc };