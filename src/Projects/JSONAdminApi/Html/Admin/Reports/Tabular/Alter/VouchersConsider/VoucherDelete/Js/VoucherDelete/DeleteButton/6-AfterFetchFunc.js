let StartFunc = async ({ inResponse, inBodyData }) => {

    let jVarLocalreportname = inBodyData.ReportName;
    let jVarLocalvoucherpk = inBodyData.VoucherPk;

    switch (inResponse.KTF) {
        case true:
            // window.location = "";
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inReportName=${jVarLocalreportname}`
            jVarLocalNewLocation += `&inRowPK=${jVarLocalvoucherpk}`
            window.location = jVarLocalNewLocation;

            break;

        case false:
            Swal.fire('Not Update Data')
            break;
        default:
    };
};

export { StartFunc };