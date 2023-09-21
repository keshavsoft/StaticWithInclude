let StartFunc = ({ inTableColumns }) => {
    let jVarLocalStorageDataAsJson = jVarGlobalPresentViewData;

    // let jVarLocalTableColumns = jVarLocalStorageDataAsJson.KData.TableColumns;
    let jVarLocalTableColumns = inTableColumns;

    let str = '';

    jVarLocalTableColumns.forEach((name) => {
        str += '<option value="' + name.DisplayName + '" />';
    });

    document.getElementById("ColumnsList").innerHTML = str;
};

export { StartFunc }