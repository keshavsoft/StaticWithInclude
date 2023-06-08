import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = ({ inProjectName }) => {
    let jVarLocalFileCreateClassName = document.getElementsByClassName("CreateFileButtonClass");

    for (let i = 0; i < jVarLocalFileCreateClassName.length; i++) {
        jVarLocalFileCreateClassName[i].addEventListener("click", async (event) => {
            await StartFuncClickFunc({
                inEvent: event,
                inProjectName
            });
        });
    };
};

export { StartFunc };
