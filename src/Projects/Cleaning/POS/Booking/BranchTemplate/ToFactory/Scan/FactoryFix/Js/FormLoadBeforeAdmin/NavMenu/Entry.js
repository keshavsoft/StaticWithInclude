import { StartFunc as StartFuncBSTableURL } from "./BSTableURL/Entry.js";
import { StartFunc as StartFuncShowAlertURL } from "./ShowAlertURL/Entry.js";
import { StartFunc as StartFuncFactoryFixNewURL } from "./FactoryFixURL/Entry.js";

const StartFunc = () => {
    StartFuncBSTableURL();
    StartFuncShowAlertURL();
    StartFuncFactoryFixNewURL();
};

export { StartFunc };