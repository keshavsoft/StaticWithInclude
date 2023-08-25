let StartFunc = ({ inFromFetch }) => {
    if (inFromFetch.KTF) {
        Swal.fire({
            title: 'Add-On Added',
            confirmButtonText: 'Ok',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                jFLocalToURL();
            }
        });
    };
};

let jFLocalToURL = () => {
    // const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);
    // myUrlWithParams.searchParams.append("OrderNumber", inOrderNumber);
    // const k1 = new URL("../Orders/OrdersShow/OrdersShow.html", myUrlWithParams.href);

    window.location.href = "";
};

export { StartFunc };