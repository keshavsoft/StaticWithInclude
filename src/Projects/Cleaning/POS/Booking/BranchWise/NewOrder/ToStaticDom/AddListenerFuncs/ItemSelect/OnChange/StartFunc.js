import { StartFunc as StartFuncFromLocalStorage } from "../../../../FromLocalStorage/MenItems.js";

let StartFunc = () => {
    jFLocalMenTab();
};

let jFLocalMenTab = () => {
    let jVarLocalMenItemsTabId = document.getElementById("MenItemsTabId");

    if (jVarLocalMenItemsTabId === null === false) {
        let jVarLocalItemSelect = jVarLocalMenItemsTabId.querySelector(".ItemSelect");

//         var element = document.getElementsByClassName('ItemSelect')[1];
// var event = new Event('change');
// element.dispatchEvent(event);

        if (jVarLocalItemSelect === null === false) jVarLocalItemSelect.addEventListener("change", (event) => {
            jFLocalItemSelectChange({
                inEvent: event,
                inLocalStorageKey: "Items"
            });
        });
    };
};

let jFLocalItemSelectChange = ({ inEvent }) => {
    try {
        let jVarLocalStorageKey = "Items";
        let jVarLocalEvent = event;
        let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
        let jVarLocalClosestTab = jVarLocalCurrentTarget.closest(".tab-pane");
        let jVarLocalRate = jVarLocalClosestTab.querySelector(".RateClass");

        let jVarLocalItemPk = parseInt(jVarLocalCurrentTarget.value);

        let jVarLocalItems = StartFuncFromLocalStorage({ inLocalStorageKey: jVarLocalStorageKey });

        let jVarLocalFind = jVarLocalItems.find(element => element.pk === jVarLocalItemPk);

        jVarLocalRate.value = jVarLocalFind.DryWashRate;

    } catch (error) {
        console.log("error : ", error);
    };
};

//Kid's tab funcs end
export { StartFunc };