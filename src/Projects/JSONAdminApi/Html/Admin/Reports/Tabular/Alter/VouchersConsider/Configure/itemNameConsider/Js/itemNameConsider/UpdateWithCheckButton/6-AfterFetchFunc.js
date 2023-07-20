let StartFunc = async ({ inResponse, inBodyData }) => {

    let jVarLocalItemName = inBodyData.ReportName;
    let jVarLocalvoucherName = inBodyData.VoucherPk;

    switch (inResponse.KTF) {
        case true:
            //window.location = "";
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inReportName=${jVarLocalItemName}`
            jVarLocalNewLocation += `&inRowPK=${jVarLocalvoucherName}`
            window.location = jVarLocalNewLocation;

            break;

        case false:
            Swal.fire(`Not Update Data...&#128531 Reson: ${inResponse.KReason}`);
            break;
        default:

    };
};

export { StartFunc };