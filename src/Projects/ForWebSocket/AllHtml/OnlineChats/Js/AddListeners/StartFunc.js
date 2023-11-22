import { StartFunc as StartFuncSendMessageButtonId } from "./SendMessageButtonId/1-ClickAssign.js";
import { StartFunc as StartFuncInputUserNameId } from "./InputUserNameId/1-ClickAssign.js";
import { StartFunc as StartFuncTerminationButtonId } from "./TerminationButtonId/1-ClickAssign.js";
import { StartFunc as StartFuncOnlineClientsRefreshButtonId } from "./OnlineClientsRefreshButtonId/1-ClickAssign.js";

let StartFunc = () => {
    StartFuncSendMessageButtonId();
    
    StartFuncInputUserNameId();
    StartFuncTerminationButtonId();
    StartFuncOnlineClientsRefreshButtonId();

};

export { StartFunc };