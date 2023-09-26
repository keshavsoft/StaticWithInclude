import { StartFunc as StartFuncGoButton } from "./GoButtonScan/1-ClickAssign.js";
import { StartFunc as StartFuncQrcodeFromParams } from "./QrCodeFromParams/1-ClickAssign.js";
const StartFunc = () => {
    
    StartFuncGoButton();
    StartFuncQrcodeFromParams();
};

export { StartFunc }