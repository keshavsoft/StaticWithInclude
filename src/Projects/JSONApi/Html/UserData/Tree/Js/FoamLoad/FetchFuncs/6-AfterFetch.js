let StartFunc = ({ inFromFetch }) => {
    let data = inFromFetch;
    jVarLocalPresentViewData = data;
    // if (data) {
    //     let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
    //     document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(data.JsonData);
    //     // localStorage.setItem("OrdersData", JSON.stringify(data.JsonData));
    // };
};

export { StartFunc };