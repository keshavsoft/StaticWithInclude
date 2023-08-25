import { StartFunc as StartFuncFromLocalStorage } from "../../../../../FromLocalStorage/OrdersData/FromPkToLocalStorage.js";

import ApiConfigJson from "../../../../ApiConfig.json" assert { type: "json" };

import { StartFunc as StartFuncOrderAmount } from "./OrderAmount.js";
import { StartFunc as StartFuncCommonDetails } from "./CommonDetails.js";

const StartFunc = ({ inPk }) => {
    let jVarLocalData = StartFuncFromLocalStorage({
        inPk,
        inBranchName: ApiConfigJson.BranchName
    });

    StartFuncOrderAmount();
    StartFuncCommonDetails({ inData: jVarLocalData,inPk });
};

export { StartFunc };