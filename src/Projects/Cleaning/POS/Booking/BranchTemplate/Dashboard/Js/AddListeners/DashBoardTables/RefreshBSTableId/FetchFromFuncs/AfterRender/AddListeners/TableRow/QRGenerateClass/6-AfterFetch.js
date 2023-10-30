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

            let jVarLocalHtmlId1 = 'LatestQrCodesRefreshBSTableId';
            let jVarLocalLatestQrCodesRefreshBSTableId = document.getElementById(jVarLocalHtmlId1);
            jVarLocalLatestQrCodesRefreshBSTableId.click();

            let jVarLocalHtmlId2 = 'TotalCountLinkId';
            let jVarLocalTotalCountLinkId = document.getElementById(jVarLocalHtmlId2);
            jVarLocalTotalCountLinkId.click();

            let jVarLocalHtmlId3 = 'TodayCountLinkId';
            let jVarLocalTodayCountLinkId = document.getElementById(jVarLocalHtmlId3);
            jVarLocalTodayCountLinkId.click();

        };
    };

};

export { StartFunc };