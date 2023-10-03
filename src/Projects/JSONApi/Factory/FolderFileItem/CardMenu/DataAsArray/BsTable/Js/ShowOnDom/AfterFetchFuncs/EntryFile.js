let StartFunc = ({ inDataToShow }) => {
    console.log("inDataToShow:", inDataToShow);

    let localmapData = inDataToShow.map((ele) => {
        return ele.Data
    });
    console.log('localmapData::', localmapData);


    let jVarLocalDataToShow = inDataToShow;
    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarLocalDataToShow,
        columns: jFLocalPrepareHeaderForDataOnly({ data: jVarLocalDataToShow })
    });

};


let jFLocalPrepareHeaderForDataOnly = ({ data }) => {
    let jVarLocalColumns = data;
    let jVarLocalReturnArray = [];
    jVarLocalReturnArray = jVarLocalColumns.map(element => {
        console.log("element::", Object.keys(element));
        return {
            title: Object.keys(element),
            field: Object.keys(element)
        };
    });

    jVarLocalReturnArray.push(
        {
            field: 'operate',
            title: 'Item Operate',
            align: 'center',
            clickToSelect: false,
            events: window.operateEvents
        });

    return jVarLocalReturnArray;
};


export { StartFunc }