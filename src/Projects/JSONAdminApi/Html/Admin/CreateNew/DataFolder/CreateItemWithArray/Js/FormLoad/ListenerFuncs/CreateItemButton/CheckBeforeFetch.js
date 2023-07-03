let StartFunc = ({ inEvent }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalItemName = jVarLocalColsestTr.querySelector('[name="ItemName"]');
    let jVarLocalFileName = jVarLocalColsestTr.querySelector('[name="slectFile"]');
    let jVarLocalItemNameValue = jVarLocalItemName.value;
    let jVarLocalFileNameValue = jVarLocalFileName.value;

    if (jVarLocalFileNameValue === "" && jVarLocalItemNameValue === "") {
        jVarLocalFileName.classList.add("is-invalid");
        jVarLocalItemName.classList.add("is-invalid");
        jVarLocalItemName.focus();
        return false;
    };
    if (jVarLocalColsestTr.classList == "table-danger") {

        return false;
    };

    return true;
};

export { StartFunc };