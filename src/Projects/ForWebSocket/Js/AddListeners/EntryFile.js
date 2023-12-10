import { StartFunc as StartFuncSendNowId } from "./SendNowId/EntryFile.js";
import { StartFunc as StartFuncSendAsJsonId } from "./SendAsJsonId/EntryFile.js";

let StartFunc = () => {

    StartFuncSendNowId();
    StartFuncSendAsJsonId();
};

export { StartFunc };