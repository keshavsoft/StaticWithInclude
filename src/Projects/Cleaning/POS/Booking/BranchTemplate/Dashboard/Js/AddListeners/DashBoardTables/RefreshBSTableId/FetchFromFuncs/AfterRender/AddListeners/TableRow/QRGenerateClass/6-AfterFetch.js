let StartFunc = async ({ inFromFetch }) => {
    if (inFromFetch.KTF === false) {
        Swal.fire({
            icon: 'warning',
            title: 'Raised',
            text: inFromFetch.KReason
        });
    } else {
        let raised = inFromFetch.QrCodesRaised;
        
        if (raised === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Not Raised',
                text: 'Product Details are Empty'
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Raised',
                text: inFromFetch.QrCodesRaised + ' QrCodes raised successfully'
            });

            let jVarLocalHtmlId = 'RefreshBSTableId';
            let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
            jVarLocalRefreshBSTableId.click();

        };
    };

};

export { StartFunc };