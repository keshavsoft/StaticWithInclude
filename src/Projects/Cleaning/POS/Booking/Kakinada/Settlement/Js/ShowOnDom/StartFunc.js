// import { StartFunc as StartFuncShowOrderDetails } from "./ShowOrderDetails/StartFunc.js";
import { StartFunc as StartFuncShowSettlementDetails } from "./ShowSettlementDetails/StartFunc.js";

import { StartFunc as StartFuncShowOrderDetails } from "./ShowOrderDetails/EntryFile.js";

const StartFunc = ({ inPk }) => {
    StartFuncShowOrderDetails({ inPk });
    StartFuncShowSettlementDetails({ inPk });
};

export { StartFunc };