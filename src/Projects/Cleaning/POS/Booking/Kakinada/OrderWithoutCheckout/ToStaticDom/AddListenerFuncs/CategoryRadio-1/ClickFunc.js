import { StartFunc as StartFuncItemsInCategory } from "./ToSelectFromLocalStorage.js";

let StartFunc = ({ inCurrentTarget }) => {
    let jVarLocalCurrentTarget = inCurrentTarget;
    let jVarLocalCategory = jVarLocalCurrentTarget.dataset.category;

    StartFuncItemsInCategory({ inCategory: jVarLocalCategory });
    jFLocalCategoryToTabPane({ inCurrentTarget: jVarLocalCurrentTarget });

    var element = document.getElementById('ItemSelectId');
    var event = new Event('change');
    element.dispatchEvent(event);
};

let jFLocalCategoryToTabPane = ({ inCurrentTarget }) => {
    let jVarLocalCurrentTarget = inCurrentTarget;

    let jVarLocalCategory = jVarLocalCurrentTarget.dataset.category;
    let jVarLocalClosestTabPane = jVarLocalCurrentTarget.closest(".tab-pane");
    jVarLocalClosestTabPane.dataset.category = jVarLocalCategory

};

export { StartFunc };