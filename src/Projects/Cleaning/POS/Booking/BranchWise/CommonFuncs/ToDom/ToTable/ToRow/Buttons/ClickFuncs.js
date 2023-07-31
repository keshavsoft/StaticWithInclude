import { StartFunc as StartFuncDeleteButton } from "./DeleteButton.js";
import { StartFunc as StartFuncAddOnButton } from "./AddOnButton.js";
import { StartFunc as StartFuncItemSerialButton } from "./ItemSerialButton.js";
import { StartFunc as StartFuncPcsButton } from "./PcsButton.js";

let StartFunc = ({ inItemSerial, inClonedTemplateRow, inPcs }) => {
    StartFuncDeleteButton({ inItemSerial, inClonedTemplateRow });
    StartFuncAddOnButton({ inItemSerial, inClonedTemplateRow });
    StartFuncItemSerialButton({inItemSerial,inClonedTemplateRow});
    StartFuncPcsButton({inItemSerial,inClonedTemplateRow,inPcs});
};

export { StartFunc };