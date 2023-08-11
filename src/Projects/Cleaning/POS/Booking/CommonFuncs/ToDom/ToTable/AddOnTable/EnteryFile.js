import { StartFunc as StartFuncLoopRows } from "./LoopRows.js";

let StartFunc = ({ inItemSerial, inNewPk }) => {
    console.log("inItemSerial:",inItemSerial);
    let jVarLocalHtmlIdAddOnCardId = document.getElementById("AddOnCardId");
    let jVarLocalAddOnItemToAddOnClass = jVarLocalHtmlIdAddOnCardId.querySelector(".AddOnItemToAddOnClass");
    jVarLocalAddOnItemToAddOnClass.value = inItemSerial;
    StartFuncLoopRows({ inItemSerial, inNewPk });

};

export { StartFunc };