import { StartFunc as StartFuncListenerFuncs } from "./ListenerFuncs/StartFunc.js";

let StartFunc = ({ inProjectName }) => {
    let jVarLocalFileCreateClassName = document.getElementsByClassName("CloneButtonClass");

    for (let i = 0; i < jVarLocalFileCreateClassName.length; i++) {
        jVarLocalFileCreateClassName[i].addEventListener("click", (event) => {
            StartFuncListenerFuncs({
                inEvent: event,
                inProjectName
            });
        });
    };
};

export { StartFunc };