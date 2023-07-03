import { StartFunc as StartFuncListenerFuncs } from "./ListenerFuncs/StartFunc.js";
import { StartFunc as StartFuncLoopByClass } from "./ListenerFuncs/UploadFileInput/LoopByClass.js";

let StartFunc = ({ inProjectName }) => {
    let jVarLocalFileCreateClassName = document.getElementsByClassName("UploadFileButtonClass");
    StartFuncLoopByClass();

    for (let i = 0; i < jVarLocalFileCreateClassName.length; i++) {
        jVarLocalFileCreateClassName[i].addEventListener("click", async (event) => {
            await StartFuncListenerFuncs({
                inEvent: event,
                inProjectName
            });
        });
    };
};

export { StartFunc };