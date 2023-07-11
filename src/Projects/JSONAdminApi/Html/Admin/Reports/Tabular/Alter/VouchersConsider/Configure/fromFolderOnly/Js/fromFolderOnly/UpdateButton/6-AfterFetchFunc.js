let StartFunc = async ({ inResponse, CurrentTarget }) => {

    let jVarLocalCurrentTarget = CurrentTarget;
    let jVarLocalItemName = jVarLocalCurrentTarget.dataset.item;
    let jVarLocalvoucherName = jVarLocalCurrentTarget.dataset.voucher;

    switch (inResponse) {
        case 200:
            //window.location = "";
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inReportName=${jVarLocalItemName}`
            jVarLocalNewLocation += `&inRowPK=${jVarLocalvoucherName}`
            window.location = jVarLocalNewLocation;

            break;

        case 204:
            Swal.fire('Not Update Data')
            break;
        default:
    };
};

export { StartFunc };