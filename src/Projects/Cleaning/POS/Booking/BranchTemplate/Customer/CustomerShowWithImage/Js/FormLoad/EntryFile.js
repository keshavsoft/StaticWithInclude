import { StartFunc as StartFuncShowOnDomEntry } from "./ShowOnDom/Entry.js";

const StartFunc = () => {
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "Rowpk" });
    
    if (jVarLocalFilterString === null) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "VoucherRef not found in URL"
        });
    } else {
        StartFuncShowOnDomEntry();
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};
export { StartFunc }
