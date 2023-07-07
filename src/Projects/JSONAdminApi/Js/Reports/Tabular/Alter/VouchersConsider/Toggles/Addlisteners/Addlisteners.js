let jFUpdateFunc = () => {
    let jVarLocalUpdateClassName = document.getElementsByClassName("UpdateButtonClass");

    for (let i = 0; i < jVarLocalUpdateClassName.length; i++) {
        jVarLocalUpdateClassName[i].addEventListener("click", jFLocalUpdateClickFunc)
    };

};
let jFLocalUpdateClickFunc = async (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalItemName = jVarLocalCurrentTarget.dataset.item;

    let jVarLocalvoucherName = jVarLocalCurrentTarget.dataset.voucher;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalActive = jVarLocalColsestTr.querySelector('[name="Active"]');

    let jVarLocalActiveValue = jVarLocalActive.checked;

    let BodyAsJson = {
        Active: jVarLocalActiveValue
    };

    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/Toggles";
    let jVarLocalRequestHeader = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ReportName: jVarLocalItemName,
            VoucherPk: jVarLocalvoucherName,
            BodyAsJson
        })
    };
    let response = await fetch(jFetchUrl, jVarLocalRequestHeader);

    switch (response.status) {
        case 200:
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inReportName=${jVarLocalItemName}`
            jVarLocalNewLocation += `&inRowPK=${jVarLocalvoucherName}`
            window.location = jVarLocalNewLocation;

            break;

        case 204:
            Swal.fire('Not Update Data..&#128531')
            break;
        default:
        // code block
    };
};

export { jFUpdateFunc };