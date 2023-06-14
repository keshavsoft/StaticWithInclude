import { StartFunc as StartFuncListenerFuncs } from "./ListenerFuncs/StartFunc.js";

let StartFunc = ({ inProjectName }) => {
    let jVarLocalUpdatebuttonClassClassName = document.getElementsByClassName("UpdatebuttonClass");

    for (let i = 0; i < jVarLocalUpdatebuttonClassClassName.length; i++) {
        jVarLocalUpdatebuttonClassClassName[i].addEventListener("click", async (event) => {
            await StartFuncListenerFuncs({
                inEvent: event,
                inProjectName
            });
        });
    };
};

export { StartFunc };