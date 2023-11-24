let StartFunc = ({ inDataToShow }) => {
    jFLocalHideSpinner();
    let jVarLocalDataToShow = inDataToShow;

    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarLocalDataToShow.DataFromServer[0].KData.TableData,
    });

};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";

};

export { StartFunc }