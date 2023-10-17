import { StartFunc as StartFuncFromLocalStorage } from "../../../../../FromLocalStorage/AddOnData/FilterAddOnData.js";

let StartFunc = ({ inItemSerial }) => {
    let jVarLocalFilteredData = StartFuncFromLocalStorage({ inAddOnItemSerial: inItemSerial });

    if (jVarLocalFilteredData.length > 0) {
        Swal.fire({
            title: `Delete the add-ons first and try`,
        });
        return false;
    }
    return true;
};

export { StartFunc };