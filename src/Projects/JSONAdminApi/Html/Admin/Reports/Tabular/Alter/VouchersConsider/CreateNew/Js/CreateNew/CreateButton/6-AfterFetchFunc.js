let StartFunc = async ({ inResponse, inBodyData }) => {

    let jVarLocalreportname = inBodyData.ReportName;
    let jVarLocalvoucherpk = inResponse.MaxPk;

    switch (inResponse.KTF) {
        case true:
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