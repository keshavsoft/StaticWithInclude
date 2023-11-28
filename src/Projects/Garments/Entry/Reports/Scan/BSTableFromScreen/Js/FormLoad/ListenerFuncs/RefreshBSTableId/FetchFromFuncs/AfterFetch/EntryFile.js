let StartFunc = ({ inDataToShow }) => {
    jFLocalHideSpinner();
    var $table = $('#table');
    $table.bootstrapTable("destroy").bootstrapTable({
        data: inDataToShow,
    });
};

export { StartFunc }