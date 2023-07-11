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
            let jVarLocalNewLocationForFalse = "";
            jVarLocalNewLocationForFalse += `?inReportName=${jVarLocalItemName}`
            jVarLocalNewLocationForFalse += `&inRowPK=${jVarLocalvoucherName}`
            jVarLocalNewLocationForFalse += `&KReson=${ResopnseData.KReason}`
            window.location = jVarLocalNewLocationForFalse;
            // Swal.fire({
            //     title: `Not Update Data...&#128531 Reson: ${ResopnseData.KReason}`,
            //     width: 600,
            //     padding: '3em',
            //     color: '#FFFFFF',
            //     background: '#FF726F url(/images/trees.png)',
            //     backdrop: `
            //       rgba(0,0,123,0.4)
            //       url("/images/nyan-cat.gif")
            //       left top
            //       no-repeat
            //     `
            //   })
            break;
        default:
        // code block
    };
};

export { StartFunc };