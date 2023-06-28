import { StartFunc as StartFuncShowButtonClass } from "./ShowButtonClass.js";
import { StartFunc as StartFuncListenerFuncs } from "./ListenerFuncs/StartFunc.js";
import { StartFunc as StartFuncCheckBeforeSave } from "./ListenerFuncs/CreateItemButton/CheckBeforeSave.js";
import { StartFunc as StartFuncUploadFileInput } from './ListenerFuncs/UploadFileInput/onReaderLoad.js';

let StartFunc = ({ inProjectName }) => {
    let jVarLocalFileCreateClassName = document.getElementsByClassName("UploadFileButtonClass");
    let jVarLocaInputClassName = document.getElementsByClassName("UploadFileInputClass");

    for (let i = 0; i < jVarLocalFileCreateClassName.length; i++) {
        jVarLocalFileCreateClassName[i].addEventListener("click", async (event) => {
            await StartFuncListenerFuncs({
                inEvent: event,
                inProjectName
            });
        });
    };

    // for (let i = 0; i < jVarLocaInputClassName.length; i++) {
    //     jVarLocaInputClassName[i].addEventListener("click", async (event) => {
    //         await StartFuncCheckBeforeSave({
    //             inEvent: event,
    //             inProjectName
    //         });
    //     });
    // };


    for (let i = 0; i < jVarLocaInputClassName.length; i++) {
        console.log("jVarLocaInputClassName : ", jVarLocaInputClassName);
        jVarLocaInputClassName[i].addEventListener("change", StartFuncUploadFileInput);
    };


    StartFuncShowButtonClass({ inProjectName });
};

export { StartFunc };