let StartFunc = () => {
    let jVarLocalFilterObject = {};
    let jVarLocalColumnOrderTableBody = document.getElementById("ColumnOrderTableBody");
    let jVarCheckBoxes = jVarLocalColumnOrderTableBody.querySelectorAll('input[type="text"]');
    console.log("jVarCheckBoxes99", jVarCheckBoxes);
    for (let i = 0; i < jVarCheckBoxes.length; i++) {
        let jVarLoopInsideClosestTr = jVarCheckBoxes[i].closest("tr");
        let jVarLoopInsideSearchInput = jVarLoopInsideClosestTr.querySelector(".SearchInput");
        let jVarLocalFilterKey = jVarLoopInsideSearchInput.dataset.dataattribute;
        jVarLocalFilterObject[jVarLocalFilterKey] = jVarLoopInsideSearchInput.value;
    };
    console.log("jVarLocalFilterObject22",jVarLocalFilterObject);
    // return jVarLocalFilterObject;
};

export { StartFunc }