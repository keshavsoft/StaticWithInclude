let StartFunc = async ({ inResponse, inBodyData }) => {

    let jVarLocalreportname = inBodyData.ReportName;
    let jVarLocalvoucherconsiderpk = inBodyData.Voucherpk;
    let jVarLocalColumnPk = inBodyData.Columnpk;

    switch (inResponse.KTF) {
        case true:
            //window.location = "";
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inReportName=${jVarLocalreportname}`
            jVarLocalNewLocation += `&voucherconsiderpk=${jVarLocalvoucherconsiderpk}`
            jVarLocalNewLocation += `&columnpk=${jVarLocalColumnPk}`
            window.location = jVarLocalNewLocation;
            break;

        case false:
            Swal.fire('Not Update Data')
            break;
        default:
    };

};

export { StartFunc };