import { StartFunc as StartFuncBulk } from "./Bulk.js";

let StartFunc = ({ inAddOnItemSerial }) => {
    let jVarLocalFromLocalStorage = StartFuncBulk();

    let jVarLocalValue = Object.values(jVarLocalFromLocalStorage);
    
    let localFilterData = jVarLocalValue.filter(element => {
        return element.AddOnItemSerial === parseInt(inAddOnItemSerial)
    });

    return localFilterData;
};

export { StartFunc };