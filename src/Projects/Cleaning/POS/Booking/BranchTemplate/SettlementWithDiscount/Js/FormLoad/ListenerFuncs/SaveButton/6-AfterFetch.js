let StartFunc = ({ inFromFetch }) => {
    if (inFromFetch) {
        Swal.fire({
            title: 'Settlement Success',
            confirmButtonText: 'Ok',
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                jFLocalToURL({inOrderNumber: 16});
            }
          });
    };
};

let jFLocalToURL = ({ inOrderNumber }) => {
    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);
    myUrlWithParams.searchParams.append("OrderNumber", inOrderNumber);
    const k1=new URL("../Orders/QrCodesTable/QrCodesTable.html",myUrlWithParams.href);

    window.location.href = k1.href;
};

export { StartFunc };