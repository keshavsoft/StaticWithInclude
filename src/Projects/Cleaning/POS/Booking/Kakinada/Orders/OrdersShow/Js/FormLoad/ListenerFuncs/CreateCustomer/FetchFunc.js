import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../../../../../ToLocalStorage/Customers/Single.js";

let StartFunc = ({ inBodyData }) => {
    return jFToLocalStorage({ inBodyData });
};

const jFToLocalStorage = ({ inBodyData }) => {
    return StartFuncToLocalStorage({ inEntry: inBodyData });
};

export { StartFunc };