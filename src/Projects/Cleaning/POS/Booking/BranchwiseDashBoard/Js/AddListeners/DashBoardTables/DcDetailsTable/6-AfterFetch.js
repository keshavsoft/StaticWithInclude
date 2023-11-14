let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;
    const entries = Object.entries(jVarLocalData).map((element)=>{
        return {element};
    });
    var $table = $('#DcTable')
    $table.bootstrapTable({ data: entries });
};

export { StartFunc };