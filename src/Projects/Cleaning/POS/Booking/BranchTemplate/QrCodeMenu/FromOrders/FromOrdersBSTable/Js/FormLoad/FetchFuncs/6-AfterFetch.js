let StartFunc = ({ inFromFetch }) => {
    let jVarLocalinDataToShow = jFLocalToArray({ inDataToShow: inFromFetch });
    let localmapData = jVarLocalinDataToShow.map((ele) => {
        return { ...Object.keys(ele) }
    });
    console.log("localmapData", localmapData);

    let jVarLocalDataToShow = localmapData;

    jFLocalPrepareHeaderForDataOnly({ inDataToShow: jVarLocalDataToShow });

    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarLocalinDataToShow,

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

let jFLocalPrepareHeaderForDataOnly = ({ inDataToShow }) => {
    console.log("inDataToShow", inDataToShow);
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);

    let jVarLocalColumns = Object.values(inDataToShow[0]);
    jVarLocalColumns.forEach(element => {
        let jVarLocalNewTh = document.createElement("th");
        jVarLocalNewTh.innerHTML = element;
        jVarLocalNewTh.dataset.field = element;
        jVarLocalNewTh.setAttribute("data-filter-control", "input")
        jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
    });
}

export { StartFunc };