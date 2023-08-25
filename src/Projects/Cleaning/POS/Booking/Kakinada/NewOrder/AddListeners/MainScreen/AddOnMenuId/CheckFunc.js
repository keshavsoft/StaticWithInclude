const StartFunc = () => {
    jFLocalForItemsCardId();
    jFLocalForMenuTabAddOnId();
    // jFLocalForItemsCardId();

    let jVarLocalHtmlId = "AddOnServiceId";
    let jVarLocalAddOnServiceId = document.getElementById(jVarLocalHtmlId);
    jVarLocalAddOnServiceId.focus();
};

 let jFLocalForMenuTabAddOnId = () =>{
    let jVarLocalMenuTabAddOnId = document.getElementById("MenuTabAddOnId");
    jVarLocalMenuTabAddOnId.classList.add("col-7");
    jVarLocalMenuTabAddOnId.classList.remove("d-none");

 }

 let jFLocalForItemsCardId = () =>{
    let jVarLocalItemsCardId = document.getElementById("ItemsCardId");
    jVarLocalItemsCardId.classList.remove("col");
    jVarLocalItemsCardId.classList.add("col-5");
 }

export { StartFunc };