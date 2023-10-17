let StartFunc = ({ inItemData }) => {
    console.log("inItemData", inItemData);
    let jVarLocalHtmlId = 'ItemNamesBodyId';
    let jVarLocalItemNamesBodyId = document.getElementById(jVarLocalHtmlId);
    const entries = Object.entries(inItemData);
    console.log("entries:", entries);
    Object.entries(inItemData).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
        const template = document.getElementById("TemplateForTableRowId");
        const clone = template.content.cloneNode(true);
        let td = clone.querySelectorAll("td");
        td[0].textContent = value.ItemName+'@'+value.Rate;
        td[1].textContent = value.Pcs;
        td[2].textContent = (value.Rate)*(value.Pcs);
        td[3].textContent = value.DeliveryDateTime;
        jVarLocalItemNamesBodyId.appendChild(clone);
    });
};
 
export { StartFunc };