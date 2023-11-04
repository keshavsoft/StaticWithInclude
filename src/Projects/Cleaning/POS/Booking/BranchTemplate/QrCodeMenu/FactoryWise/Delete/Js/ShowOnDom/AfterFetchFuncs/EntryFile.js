import { StartFunc as jFLocalPrepareHeaderForDataOnly } from "./TableColumns.js";

let StartFunc = async ({ inDataToShow }) => {
   

    let jVarLocalDataToShow = inDataToShow;
    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarLocalDataToShow,
        columns: jFLocalPrepareHeaderForDataOnly({ data: jVarLocalDataToShow })
    });

};

export { StartFunc };