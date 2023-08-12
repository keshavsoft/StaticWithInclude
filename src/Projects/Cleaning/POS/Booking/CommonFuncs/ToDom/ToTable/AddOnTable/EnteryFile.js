import { StartFunc as StartFuncLoopRows } from "./LoopRows.js";

let StartFunc = ({ inItemSerial, inNewPk }) => {
    let jVarLocalHtmlIdAddOnCardId = document.getElementById("AddOnCardId");
    let jVarLocalAddOnItemToAddOnClass = jVarLocalHtmlIdAddOnCardId.querySelector(".AddOnItemToAddOnClass");
    jVarLocalAddOnItemToAddOnClass.value = inItemSerial;

    StartFuncLoopRows({ inItemSerial, inNewPk });
};

export { StartFunc };