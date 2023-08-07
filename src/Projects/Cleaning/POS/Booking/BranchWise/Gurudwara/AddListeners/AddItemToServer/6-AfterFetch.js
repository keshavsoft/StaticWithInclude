let StartFunc = ({ inFromFetch }) => {
    if (inFromFetch.KTF === true) {
        let jVarLocalOrderNumber = inFromFetch.kPK;
        jFLocalToURL({ inOrderNumber: jVarLocalOrderNumber });
    };
};

let jFLocalToURL = ({ inOrderNumber }) => {
    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);
    const k1 = new URL("../../../Booking/BranchWise/OrderWithoutCheckout/OrderWithoutCheckout.html", myUrlWithParams.href);
    k1.searchParams.append("OrderNumber", inOrderNumber);

    window.location.href = k1.href;
};

export { StartFunc };