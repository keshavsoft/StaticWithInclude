let StartFunc = async ({ inResponse, inBodyData }) => {

    let jVarLocalItemName = inBodyData.ItemName;
    let jVarLocalvoucherName = inBodyData.voucher;

    switch (inResponse.KTF) {
        case true:
            //window.location = "";
            let jVarLocalNewLocation = "";
            jVarLocalNewLocation += `?inReportName=${jVarLocalItemName}`
            jVarLocalNewLocation += `&inRowPK=${jVarLocalvoucherName}`
            window.location = jVarLocalNewLocation;

            break;

        case false:
            Swal.fire('Not Update Data')
            break;
        default:
    };
};

export { StartFunc };