let StartFunc = ({ inFromFetch }) => {
    if (inFromFetch) {
        Swal.fire({
            title: 'Settlement Success',
            confirmButtonText: 'Ok',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                jFLocalToURL({ inOrderNumber: 16 });
            }
        });
    };
};

let jFLocalToURL = ({ inOrderNumber }) => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);
    const k1 = new URL("../Orders/QrCodesTable/QrCodesTable.html", myUrlWithParams.href);

    k1.searchParams.append("OrderNumber", inOrderNumber);
    k1.searchParams.append("BranchName", jVarLocalBranchName);

    window.location.href = k1.href;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };