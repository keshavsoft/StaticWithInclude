import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalClientNameClass = document.getElementsByClassName("ClientLinkClass");
    console.log("jvar",jVarLocalClientNameClass);
    for (var i = 0; i < jVarLocalClientNameClass.length; i++) {
        let jVarLocalClientName = jVarLocalClientNameClass[i].innerHTML;
        jVarLocalClientNameClass[i].addEventListener("click", (event) => {
            let jVarLocalCurrentTarget = event.currentTarget;
            StartFuncButtonClickFunc({ inTabName: jVarLocalClientName })
        });
    };
};

export { StartFunc };