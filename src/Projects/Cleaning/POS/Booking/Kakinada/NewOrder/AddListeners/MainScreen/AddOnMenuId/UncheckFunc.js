const StartFunc = ({ inHtmlControl }) => {
    let jVarLocalClosestTabPane = inHtmlControl.closest(".tab-pane");
    jFLocalForMenuTabAddOnId();
    jFLocalForItemsCardId();

    let jVarLocalHtmlClass = ".ItemSelect";
    let jVarLocalItemSelect = jVarLocalClosestTabPane.querySelector(jVarLocalHtmlClass);

    jVarLocalItemSelect.focus();
};

let jFLocalForMenuTabAddOnId = () =>{
    let jVarLocalMenuTabAddOnId = document.getElementById("MenuTabAddOnId");
    jVarLocalMenuTabAddOnId.classList.add("d-none");
    jVarLocalMenuTabAddOnId.classList.remove("col-7");

 }

 let jFLocalForItemsCardId = () =>{
    let jVarLocalItemsCardId = document.getElementById("ItemsCardId");
    jVarLocalItemsCardId.classList.add("col");
    jVarLocalItemsCardId.classList.remove("col-5");
 }

export { StartFunc };