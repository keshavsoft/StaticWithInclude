import ApiConfigJson from "./../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = ({ inFromFetch }) => {
    if (inFromFetch.KTF === true) {
        let jVarLocalOrderNumber = inFromFetch.kPK;
        jFLocalToURL({ inOrderNumber: jVarLocalOrderNumber });
    }else{
        Swal.fire({
            icon: 'error',
            title: `${ApiConfigJson.ForFetch.JsonFileName} not found`,
            text: `Json File name : ${ApiConfigJson.ForFetch.JsonFileName} not found in Data Folder : ${ApiConfigJson.ForFetch.FolderName}`
        })
    };
};
let jFLocalToURL = ({ inOrderNumber }) => {
    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);
    const k1 = new URL("../OrderWithoutCheckout/OrderWithoutCheckout.html", myUrlWithParams.href);
    k1.searchParams.append("OrderNumber", inOrderNumber);

    window.location.href = k1.href;
};

export { StartFunc };