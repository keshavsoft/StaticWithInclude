import { jFStartFunc as CheckUserFuncsjFStartFunc } from "../../../../CommonFuncs/LoginFuncs/CheckUserFuncs.js";
import { StartFunc as ShowOnDomStartFunc } from "./ToDom/ShowOnDom.js";
import { StartFunc as AddListenersStartFunc } from "../Show/AddListenerFuncs/StartFuncs.js";
import { ConfigObject } from "../../../ApiConfig.js";
import { KeysObject } from "../ConfigKeys.js";

let jVarCommonKToken = ConfigObject.TokenName;
let jVarLocalStorageKeyName = ConfigObject.LocalStorageKeyName;
let jVarCommonKeys = KeysObject.CommonKeys;
let jVarCommonProjectName = ConfigObject.ProjectName;

let jFStartFunc = async () => {
    CheckUserFuncsjFStartFunc({
        inUserKey: jVarLocalStorageKeyName,
        inKTokenKey: jVarCommonKToken
    });

    await ShowOnDomStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });
    AddListenersStartFunc({ ...jVarCommonKeys, inProjectName: jVarCommonProjectName });
};

jFStartFunc().then();