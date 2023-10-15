import { StartFunc as StartFuncKSMainTableRowDeleteClass } from "./KSMainTableRowDeleteClass/1-ClickAssign.js";
import { StartFunc as StartFuncPrepareColumns } from "./BuildTable/PrepareColumns.js";

let StartFunc = ({ inDataToShow }) => {
    jFLocalHideSpinner();
    let jVarLocalDataToShow = inDataToShow;

    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarLocalDataToShow.DataFromServer[0].KData.TableData,
        columns: StartFuncPrepareColumns({ data: jVarLocalDataToShow.DataFromServer[0].KData.TableColumns })
    });

    StartFuncKSMainTableRowDeleteClass();
};

let jFLocalHideSpinner=()=>{
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";

};

export { StartFunc }