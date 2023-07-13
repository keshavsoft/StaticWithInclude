import { StartFunc as StartFuncShowOrderDetails } from "./ShowOrderDetails/StartFunc.js";

const StartFunc = ({ inPk }) => {
    StartFuncShowOrderDetails({ inPk });
};

export { StartFunc };