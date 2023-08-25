import { StartFunc as StartFuncItemsInCategory } from "./ToSelectFromLocalStorage.js";
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


//         var element = document.getElementsByClassName('ItemSelect')[1];
// var event = new Event('change');
// element.dispatchEvent(event);

export { StartFunc };