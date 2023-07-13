import { StartFunc as StartFuncBulk } from "./Bulk.js";

let StartFunc = ({ inCategory }) => {
    let jVarLocalFromLocalStorage = StartFuncBulk();

    let jVarLocalFiletered = jVarLocalFromLocalStorage.filter(element => {
        return element.Category === inCategory;
    });

    return jVarLocalFiletered;
};

export { StartFunc };