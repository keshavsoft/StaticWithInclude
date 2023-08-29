let StartFunc = ({ inRowPk }) => {
    let jVarLocalKCont1 = document.getElementById("KCont1");

    let jVarLocalElementsToFocus = jVarLocalKCont1.querySelectorAll("[data-pk]");
    console.log("jVarLocalElementsToFocus", jVarLocalElementsToFocus);
    if (jVarLocalElementsToFocus.length > 0) {
        jVarLocalElementsToFocus[0].focus();
    }
};

export { StartFunc };