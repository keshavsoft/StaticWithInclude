let StartFunc = () => {
    let jVarLocalHtmlId = 'tableHeadRow';
    let jVarLocaltableHeadRow = document.getElementById(jVarLocalHtmlId);

    let jVarLocalNewTh = document.createElement("th");
    jVarLocalNewTh.innerHTML = "Mobile";
    jVarLocalNewTh.dataset.field = "Mobile";
    jVarLocalNewTh.setAttribute("data-filter-control", "select");
    jVarLocaltableHeadRow.appendChild(jVarLocalNewTh);
};

export { StartFunc };