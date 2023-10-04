let StartFunc = () => {
    let jVarLocalReferncePk = getUrlQueryParams({ inGetKey: "OrderNumber" });
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "Branch" });

    if (jVarLocalReferncePk === null ) {
        Swal.fire({
            title: 'OrderNumber Not Found',
            text: "OrderNumber Not Found in Params",
            icon: 'error',
        });
        return;
    };
    if (jVarLocalBranchName === null ) {
        Swal.fire({
            title: 'Branch Not Found',
            text: "Branch Not Found in Params",
            icon: 'error',
        });
        return;
    };
    
    return true;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};
export { StartFunc }