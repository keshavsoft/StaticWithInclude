let StartFunc = async ({ inResponse, CurrentTarget }) => {

    let jVarLocalCurrentTarget = CurrentTarget;
    let jVarLocalreportname = jVarLocalCurrentTarget.dataset.reportname;
    let jVarLocalvoucherpk = jVarLocalCurrentTarget.dataset.voucherpk;

    switch (inResponse) {
        case 200:
            //window.location = "";
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inReportName=${jVarLocalreportname}`
            jVarLocalNewLocation += `&inRowPK=${jVarLocalvoucherpk}`
            window.location = jVarLocalNewLocation;

            break;

        case 204:
            Swal.fire('Not Update Data')
            break;
        default:
    };
};

export { StartFunc };