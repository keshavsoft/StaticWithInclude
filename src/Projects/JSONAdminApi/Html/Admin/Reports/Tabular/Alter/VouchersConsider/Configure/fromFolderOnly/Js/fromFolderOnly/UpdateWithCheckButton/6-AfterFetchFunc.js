let StartFunc = async ({ inResponse, CurrentTarget }) => {

    let jVarLocalCurrentTarget = CurrentTarget;
    let jVarLocalItemName = jVarLocalCurrentTarget.dataset.item;
    let jVarLocalvoucherName = jVarLocalCurrentTarget.dataset.voucher;


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