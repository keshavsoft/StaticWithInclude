import { StartFunc as StartFuncItemsInCategory } from "./ToSelectFromLocalStorage.js";

let StartFunc = ({ inCurrentTarget }) => {
    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarLocalCategory = jVarLocalCurrentTarget.dataset.category;

    StartFuncItemsInCategory({ inCategory: jVarLocalCategory });

    var element = document.getElementById('ItemSelectId');
    var event = new Event('change');
    element.dispatchEvent(event);
};

export { StartFunc };