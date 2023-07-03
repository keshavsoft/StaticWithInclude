let StartFunc = ({ inCurrentTarget }) => {
    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarClosestInputGroup = jVarLocalCurrentTarget.closest(".input-group");
    let jVarClosestContainer = jVarLocalCurrentTarget.closest(".container");
    let jVarClosestTabPane = jVarLocalCurrentTarget.closest(".tab-pane");;

    let jVarLocalReportSelected = jVarClosestInputGroup.querySelector(".ReportSelectedClass").value;
    let jVarCurrentTabButton = jVarClosestContainer.querySelector(`ul.nav-tabs button[data-bs-target='#${jVarClosestTabPane.id}']`);
    jVarCurrentTabButton.innerText = jVarLocalReportSelected;

    return jVarLocalReportSelected;
};

export { StartFunc };