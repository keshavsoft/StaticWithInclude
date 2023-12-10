import { StartFunc as StartFuncConnectNowId } from "./ConnectNowId/EntryFile.js";
import { StartFunc as StartFuncSendAsJsonId } from "./SendAsJsonId/EntryFile.js";

let StartFunc = () => {

    StartFuncConnectNowId();
    StartFuncSendAsJsonId();
};

export { StartFunc };