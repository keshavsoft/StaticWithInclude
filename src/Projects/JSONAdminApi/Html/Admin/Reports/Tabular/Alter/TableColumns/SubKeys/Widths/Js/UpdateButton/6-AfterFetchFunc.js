let StartFunc = async ({ inResponse, inBodyData }) => {

    let jVarLocalreportname = inBodyData.ReportName;
    let jVarLocalvoucherconsiderpk = inBodyData.TableColumnsPK;

    switch (inResponse.KTF) {
        case true:
            //window.location = "";
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inReportName=${jVarLocalreportname}`
            jVarLocalNewLocation += `&inDataAttribute=${jVarLocalvoucherconsiderpk}`
            window.location = jVarLocalNewLocation;
            break;

        case false:
            Swal.fire('Not Update Data')
            break;
        default:
    };

};

export { StartFunc };