import { StartFunc as StartFuncBulk } from "./Bulk.js";

const StartFunc = () => {
    let jVarLocalFromLocalStorage = StartFuncBulk();
    let jVarLocalArray = [];

    Object.entries(jVarLocalFromLocalStorage).forEach(
        ([key, value]) => {
            jVarLocalArray.push({
                ...value,
                pk: key
            });
        }
    );

    return jVarLocalArray;
};

export { StartFunc };