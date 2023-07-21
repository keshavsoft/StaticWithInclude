let StartFunc = ({ inResponse, inBodyData }) => {

    let jVarLocalReportName = inBodyData.ReportName;
    let jVarLocalvoucherName = inBodyData.VouchersConsiderPK;

    switch (inResponse.KTF) {
        case true:
            //window.location = "";
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inReportName=${jVarLocalReportName}`
            jVarLocalNewLocation += `&inRowPK=${jVarLocalvoucherName}`
            window.location = jVarLocalNewLocation;

            break;

        case false:
            Swal.fire('Not Update Data..&#128531')
            break;
        default:
    };
};

export { StartFunc };