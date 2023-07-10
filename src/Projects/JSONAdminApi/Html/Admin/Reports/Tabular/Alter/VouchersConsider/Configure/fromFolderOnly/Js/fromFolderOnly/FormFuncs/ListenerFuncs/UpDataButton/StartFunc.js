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
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
             ItemName: jVarLocalItemName,
            voucher: jVarLocalvoucherName,
            BodyAsJson
        })
    }

    let response = await fetch(jFetchUrl, jVarLocalRequestHeader);

   switch (responseData.status) {
        case 200:
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inReportName=${jVarLocalItemName}`
            jVarLocalNewLocation += `&inRowPK=${jVarLocalvoucherName}`
            window.location = jVarLocalNewLocation;

            break;

        case 204:
            Swal.fire('Not Update Data')
            break;
        default:
        // code block
    };
};

export { StartFunc };