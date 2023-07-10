let StartFunc = async ({ inevent }) => {
    let jVarLocalCurrentTarget = inevent.currentTarget;
    let jVarLocalItemName = jVarLocalCurrentTarget.dataset.item;

    let jVarLocalvoucherName = jVarLocalCurrentTarget.dataset.voucher;

    let jVarLocalColsestTr = jVarLocalCurrentTarget.closest("tr");
    let jVarLocalFolderName = jVarLocalColsestTr.querySelector('[name="FolderName"]');
    let jVarLocalFromFolder = jVarLocalColsestTr.querySelector('[name="FromFolder"]');

    let jVarLocalFolderNameValue = jVarLocalFolderName.value;
    let jVarLocalFromFolderValue = jVarLocalFromFolder.checked;

    let BodyAsJson = {
        FolderName: jVarLocalFolderNameValue,
        FromFolder: jVarLocalFromFolderValue

    };

    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ReportsFolder/LedgerAutoJsonFile/FromReports/FromVoucherConsider/FromKeys/FromFolderOnly";
    let jVarLocalRequestHeader = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ReportName: jVarLocalItemName,
            VoucherPk: jVarLocalvoucherName,
            BodyAsJson
        })
    }

    let response = await fetch(jFetchUrl, jVarLocalRequestHeader);

    let ResopnseData = await response.json();

    switch (ResopnseData.KTF) {
        case true:
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inReportName=${jVarLocalItemName}`
            jVarLocalNewLocation += `&inRowPK=${jVarLocalvoucherName}`
            window.location = jVarLocalNewLocation;

            break;

        case false:
            Swal.fire(`Not Update Data...&#128531 Reson: ${ResopnseData.KReason}`)
            break;
        default:
        // code block
    };
};

export { StartFunc };