// import { StartFunc as StartFuncItemsInCategory } from "./ToSelectFromLocalStorage.js";
import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    
    let jVarLocalRadios = document.querySelectorAll('input[type=radio]');

    Array.from(jVarLocalRadios).forEach(link => {
        link.addEventListener('click', function (event) {
            let jVarLocalCurrentTarget = event.currentTarget;

            StartFuncClickFunc({ inCurrentTarget: jVarLocalCurrentTarget })
        });
    });
};

export { StartFunc };