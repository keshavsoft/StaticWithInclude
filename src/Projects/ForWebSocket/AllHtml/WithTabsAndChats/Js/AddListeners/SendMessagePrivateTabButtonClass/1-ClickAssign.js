import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

let StartFunc = ({ inTabName }) => {
    let jVarLocalTabName = inTabName;
    let jVarLocalSendMessagePrivateTabButtonClass = document.getElementsByClassName("SendMessagePrivateTabButtonClass");
    for (var i = 0; i < jVarLocalSendMessagePrivateTabButtonClass.length; i++) {
        jVarLocalSendMessagePrivateTabButtonClass[i].addEventListener("click", () => {
            StartFuncButtonClickFunc({ inTabName: jVarLocalTabName, index : i-1 })
        });
    };
};

export { StartFunc };