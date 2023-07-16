import { StartFunc as StartFuncShowData } from "./FetchFuncs/ShowData.js";
// import { StartFunc as CheckTokenStartFunc } from "../../AdminData/CheckToken.js";
import { StartFunc as AddListenersStartFunc } from "./AddListeners.js";
import { StartFunc as StartFuncAdminData } from "../../AdminData/StartFunc.js";

let localJsonDataFetch = await fetch('/JSONUser/Js/ConfigKeys.json');
let ResponseJsonData = await localJsonDataFetch.json();

let StartFunc = async () => {
    let jVarLocalFromAdmin = await StartFuncAdminData();

    if (jVarLocalFromAdmin) {
        AddListenersStartFunc({
            inSubRoute: ResponseJsonData.SubRoute,
            inUserKey: ResponseJsonData.UserKey,
            inFirmKey: ResponseJsonData.FirmKey,
            inTokenName: ResponseJsonData.TokenName,
            inModalId: ResponseJsonData.ModalId
        });
    };

    // AddListenersStartFunc({
    //     inSubRoute: ResponseJsonData.SubRoute,
    //     inUserKey: ResponseJsonData.UserKey,
    //     inFirmKey: ResponseJsonData.FirmKey,
    //     inTokenName: ResponseJsonData.TokenName,
    //     inModalId: ResponseJsonData.ModalId
    // });

    // CheckTokenStartFunc({
    //     inUserKey: ResponseJsonData.UserKey,
    //     inFirmKey: ResponseJsonData.FirmKey,
    //     inTokenName: ResponseJsonData.TokenName,
    //     inModalId: ResponseJsonData.ModalId
    // });

    StartFuncShowData();
};

StartFunc();
