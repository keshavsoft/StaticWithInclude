// import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../../../../../ToLocalStorage/Items/Single.js";
import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../../POS/Booking/ToLocalStorage/Items/Single.js";



let StartFunc = ({ inBodyData }) => {
    return jFToLocalStorage({ inBodyData });
};

const jFToLocalStorage = ({ inBodyData }) => {
    return StartFuncToLocalStorage({ inEntry: inBodyData });
};

export { StartFunc };