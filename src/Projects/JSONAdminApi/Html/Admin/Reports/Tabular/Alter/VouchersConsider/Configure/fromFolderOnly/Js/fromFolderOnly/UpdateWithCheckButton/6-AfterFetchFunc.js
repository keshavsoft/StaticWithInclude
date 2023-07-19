let StartFunc = async ({ inResponse, inBodyData }) => {

    let jVarLocalItemName = inBodyData.ReportName;
    let jVarLocalvoucherName = inBodyData.VoucherPk;

    switch (inResponse.KTF) {
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
            jVarLocalNewLocationForFalse += `&KReson=${inResponse.KReason}`
            window.location = jVarLocalNewLocationForFalse;
            break;
        default:
    };
};

export { StartFunc };