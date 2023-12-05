import ApiConfigJson from "./../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = ({ inFromFetch, inBodyData }) => {
    if (inFromFetch.KTF === true) {
        let jVarLocalOrderNumber = inFromFetch.NewPk;
        jFLocalToURL({ inOrderNumber: jVarLocalOrderNumber, inBodyData });
    } else {
        Swal.fire({
            icon: 'error',
            title: `Reason`,
            text: `${JSON.stringify(inFromFetch.ServerSideCheck)}`
        })
    };
};
let jFLocalToURL = ({ inOrderNumber,inBodyData }) => {
    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);
    const k1 = new URL("../OrderWithoutCheckout/OrderWithoutCheckout.html", myUrlWithParams.href);
    k1.searchParams.append("BranchName", inBodyData.inFileNameOnly);
    k1.searchParams.append("OrderNumber", inOrderNumber);

    window.location.href = k1.href;
};

export { StartFunc };