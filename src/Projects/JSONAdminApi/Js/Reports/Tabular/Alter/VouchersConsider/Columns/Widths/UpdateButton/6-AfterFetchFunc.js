let StartFunc = async ({ inResponse, inBodyData }) => {

    let jVarLocalreportname = inBodyData.reportname;
    let jVarLocalvoucherconsiderpk = inBodyData.voucherconsiderpk;
    let jVarLocalColumnPk = inBodyData.columnpk;

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