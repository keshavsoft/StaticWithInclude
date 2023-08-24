import { StartFunc as StartFuncAdminData } from "../../AdminData/StartFunc.js";
import { StartFunc as StartFuncButtonClicks } from "./Js/ListenerFuncs/StartFunc.js";

import FromConfigKeys from '../../ConfigKeys.json' assert { type: 'json' };

let jVarGlobalAdminSubRoute = FromConfigKeys.AdminSubRoute;

let StartFunc = async () => {
    let jVarLocalFromAdmin = await StartFuncAdminData();

    if (jVarLocalFromAdmin) {
        StartFuncButtonClicks({
            inSubRoute: jVarGlobalAdminSubRoute
        });
    };
};

StartFunc().then();