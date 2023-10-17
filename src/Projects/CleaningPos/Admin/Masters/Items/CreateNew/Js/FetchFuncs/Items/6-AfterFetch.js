import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../POS/Booking/ToLocalStorage/Items/Bulk.js";

let StartFunc = ({ inFromFetch }) => {
    if (inFromFetch.KTF) {

        StartFuncToLocalStorage({inData: inFromFetch.JsonData});

    };
};

export { StartFunc };