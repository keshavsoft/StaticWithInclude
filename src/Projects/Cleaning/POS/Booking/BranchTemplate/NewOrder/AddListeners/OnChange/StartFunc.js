import { StartFunc as StartFuncFromLocalStorage } from "../../FromLocalStorage/MenItems.js";

let StartFunc = () => {
    let jVarLocalItemSelectId = document.getElementById("ItemSelectId");
    if (jVarLocalItemSelectId === null === false) jVarLocalItemSelectId.addEventListener("change", (event) => {
        jFLocalItemSelectChange({
            inEvent: event,
            inLocalStorageKey: "Items"
        });
    });

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

        let jVarLocalFind = Object.values(jVarLocalItems).find(element => element.pk === jVarLocalItemPk);

        jVarLocalRate.value = jVarLocalFind.DryWashRate;

    } catch (error) {
        console.log("error : ", error);
    };
};

//Kid's tab funcs end
export { StartFunc };