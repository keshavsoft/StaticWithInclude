import { jfInsertToPreDiv as jfInsertToPreDivItemsTableRow } from "./BillPrint/ItemsTableRow.js";

let StartFunc = () => {
    let LocalPrintId = document.getElementById("PrintId");
    LocalPrintId.addEventListener("click", jFLocalClickFunc)
};

const jFLocalPrintHeader1 = () => {
    let jVarLocalBillData = localStorage.getItem("BillData");
    let jVarLocalBillDataAsJson = JSON.parse(jVarLocalBillData);

    let k1 = document.getElementById("PrintDiv");
    let k2 = document.getElementById("TemplateForFirmHeading");

    k1.innerHTML += k2.innerHTML;
    k1.innerHTML += `  Customer :   ${jVarLocalBillDataAsJson.CustomerName}\n`;
    k1.innerHTML += `  Phone    :   ${jVarLocalBillDataAsJson.CustomerNumber}\n`;
    k1.innerHTML += `  Bill     :   ${jVarLocalBillDataAsJson.BillNumber}\n`;
    k1.innerHTML += `  Date     :   ${jVarLocalBillDataAsJson.Date}\n`;
};
const jFLocalPrintHeader = () => {
    let jVarLocalBillData = localStorage.getItem("BillData");
    let jVarLocalBillDataAsJson = JSON.parse(jVarLocalBillData);

    let k1 = document.getElementById("PrintDiv");
    let k2 = document.getElementById("TemplateForFirmHeading");
    let LocalBillModeId = document.getElementById("BillModeId").value;

    k1.innerHTML += k2.innerHTML;
    k1.innerHTML += `---------------------------------------------\n`
    k1.innerHTML += `               TAX INVOICE\n`
    k1.innerHTML += `               ${LocalBillModeId}\n`
    k1.innerHTML += `---------------------------------------------\n`
    k1.innerHTML += `  Customer :   ${jVarLocalBillDataAsJson.CustomerName}\n`;
    k1.innerHTML += `  Phone    :   ${jVarLocalBillDataAsJson.CustomerNumber}\n`;
    k1.innerHTML += `----------------------------------------------\n`
    k1.innerHTML += `  Bill : ${jVarLocalBillDataAsJson.BillNumber}   Date : ${jVarLocalBillDataAsJson.Date}  Time : 7:30\n`;
};

const jFLocalPrintFooter = () => {
    let jVarLocalInventoryData = localStorage.getItem("GstData");
    let jVarLocalInventoryDataAsJson = JSON.parse(jVarLocalInventoryData);
    let localGstToata = document.getElementById("TotalTaxAmountId");
    // let localTotalGSTAmountId = document.getElementById("TotalGSTAmountId");
    let localTotalGSTAmountId = document.getElementById("TotalCGSTAmountId");
    let localTotalSGSTAmountId = document.getElementById("TotalSGSTAmountId");

    let k1 = document.getElementById("PrintDiv");
    let k2 = document.getElementById("TemplateForGridFooter");
    let k3 = document.getElementById("TemplateForTerms");

    k1.innerHTML += k2.innerHTML;
    jVarLocalInventoryDataAsJson.forEach(element => {
        let jVarLoopInsideGST = `${element.GST}%`;
        let jVarLoopInsideGstAmount = `${element.GstAmount}`;
        let jVarLoopInsideCGSTKey = `${element.CGSTKey}%`;
        let jVarLoopInsideCGSTValue = `${element.CGSTValue}`;
        let jVarLoopInsideSGSTKey = `${element.SGSTKey}%`;
        let jVarLoopInsideSGSTValue = `${element.SGSTValue}`;

        // k1.innerHTML +=` ${jVarLoopInsideGST}    ${jVarLoopInsideGstAmount}      ${jVarLoopInsideCGSTKey}   ${jVarLoopInsideCGSTValue}   ${jVarLoopInsideSGSTKey}    ${jVarLoopInsideSGSTValue}\n`;

        k1.innerHTML += `${jVarLoopInsideGST.toString().padStart(2, " ")}`;
        k1.innerHTML += `${" ".repeat(6)}${jVarLoopInsideGstAmount.padEnd(4, " ")}`;
        k1.innerHTML += `${jVarLoopInsideCGSTKey.padStart(9)}`;
        k1.innerHTML += `${jVarLoopInsideCGSTValue.padStart(7)}`;
        k1.innerHTML += `${jVarLoopInsideSGSTKey.padStart(9)}`;
        k1.innerHTML += `${jVarLoopInsideSGSTValue.padStart(9)}\n`;

    });
    k1.innerHTML += `----------------------------------------------\n`
    k1.innerHTML += `Total: ${localGstToata.innerHTML.padStart(2, " ")}`;
    k1.innerHTML += ` ${" ".repeat(9)}${localTotalGSTAmountId.innerHTML.padEnd(15)}`;
    k1.innerHTML += ` ${localTotalSGSTAmountId.innerHTML}\n`;
    k1.innerHTML += `----------------------------------------------\n`


    k1.innerHTML += k3.innerHTML;



};

let jFLocalClickFunc = () => {
    jFLocalPrintHeader();
    jfInsertToPreDivItemsTableRow();
    // jFLocalPrintGrid();
    jFLocalPrintFooter();
    printJS("PrintDiv", "html");
};
export { StartFunc };