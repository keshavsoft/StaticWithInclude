let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;
    let jVarLocalArray = jFLocalToArray({ inDataToShow: jVarLocalData });
    var $table = $('#NewCustomersTable')
    $table.bootstrapTable({
        data: jVarLocalArray,
        onPostBody: function () {
            $(".fixed-table-toolbar .search .search-input").focus()
        }
    });

};

let jFLocalToArray = ({ inDataToShow }) => {
    let jVarLocalArray = [];
    Object.entries(inDataToShow).forEach(
        ([key, value]) => {
            jVarLocalArray.push({
                ...value,
                pk: key
            });
        }
    );

    return jVarLocalArray;
};

export { StartFunc };