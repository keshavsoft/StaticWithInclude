import { StartFunc as StartFuncPrepareColumns } from "./PrepareColumns.js";

let StartFunc = ({ inFromFetch }) => {
    let jVarLocalDataToShow = jFLocalToArray({ inFromFetch });
    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarLocalDataToShow,
        columns: StartFuncPrepareColumns({ data: jVarLocalDataToShow[0] })
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