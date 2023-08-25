import { StartFunc as StartFuncFormLoad } from "./FormLoad/EntryFile.js";

import { StartFunc as StartFuncButtonClicks } from "./Js/ListenerFuncs/StartFunc.js";

// import FromConfigKeys from '../../ConfigKeys.json' assert { type: 'json' };

// let jVarGlobalAdminSubRoute = FromConfigKeys.AdminSubRoute;

let StartFunc = async () => {
    StartFuncFormLoad();

    StartFuncButtonClicks();
};

StartFunc().then();