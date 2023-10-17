let StartFunc = () => {
    let jVarLocalFromLocalStorage = jFLocalFromLocalStorage();
    console.log("aaaaaaaaaaaaa : ", jVarLocalFromLocalStorage);
    jFCommonSelectFill({
        inData: jVarLocalFromLocalStorage,
        inHtmlId: "MenItemsTabId"
    });
};

let jFCommonSelectFill = ({ inData, inHtmlId }) => {
    let jVarLocalinHtmlId = document.getElementById(inHtmlId);

    if (jVarLocalinHtmlId === null === false) {
        let jVarLocalWomanWashSelectId = jVarLocalinHtmlId.querySelector("select.ItemSelect");

        let jVarLocalMenItems = inData.map(element => {
            return {
                ItemName: element.ItemName,
                pk: element.pk
            }
        });

        jFLocalAddToSelect({
            inData: jVarLocalMenItems,
            inHtmlSelect: jVarLocalWomanWashSelectId
        });
    };
};

let jFLocalAddToSelect = ({ inData, inHtmlSelect }) => {
    if (inHtmlSelect === null === false) {
        inHtmlSelect.innerHTML = "";

        inData.forEach((element, LoopIndex) => {
            var car = new Option(element.ItemName, element.pk);
            inHtmlSelect.options.add(car);
        });
    };
};

let jFLocalFromLocalStorage = () => {
    let jVarLocalMenItems = "Items";
    let jVarFromLocalStorage = localStorage.getItem(jVarLocalMenItems);
    let jVarFromLocalStorageAsJson = JSON.parse(jVarFromLocalStorage);

    return Object.values(jVarFromLocalStorageAsJson);
};

export { StartFunc };