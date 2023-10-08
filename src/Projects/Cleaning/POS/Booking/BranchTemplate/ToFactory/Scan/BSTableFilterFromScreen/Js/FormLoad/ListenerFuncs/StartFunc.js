import { StartFunc as StartFuncRefreshBSTableId } from "./RefreshBSTableId/EntryFile.js";

let StartFunc = () => {
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "VoucherRef"});
    if (jVarLocalFilterString === null) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "VoucherRef not found in URL"
        }); 
    }else{
        StartFuncRefreshBSTableId();
    }

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };