// import { StartFunc as StartFuncFromLocalStorage } from "../../../../../../../../../FromLocalStorage/OrdersData/FromPk.js";
import { StartFunc as StartFuncShowOrderDetails } from "./ShowOrderDetails/StartFunc.js";

const StartFunc = ({ inPk }) => {
    StartFuncShowOrderDetails({ inPk });
};

export { StartFunc };