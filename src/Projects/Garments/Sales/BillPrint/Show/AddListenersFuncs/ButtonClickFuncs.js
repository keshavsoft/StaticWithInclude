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
    console.log("LocalBillModeId:",LocalBillModeId);

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

    k1.innerHTML +=` ${jVarLoopInsideGST}    ${jVarLoopInsideGstAmount}      ${jVarLoopInsideCGSTKey}   ${jVarLoopInsideCGSTValue}   ${jVarLoopInsideSGSTKey}    ${jVarLoopInsideSGSTValue}\n`;



        // k1.innerHTML += `${jVarLoopInsideGST.padStart(6, " ")}`;
        // k1.innerHTML += `${" ".repeat(18)}${jVarLoopInsideCGSTKey.padEnd(10)}`;
        // k1.innerHTML += `${jVarLoopInsideSGSTKey.padStart(11)}\n`;



        // k1.innerHTML += `${jVarLoopInsideGstAmount.padStart(6, " ")}`;
        // k1.innerHTML += `${" ".repeat(18)}${jVarLoopInsideCGSTValue.padEnd(10)}`;
        // k1.innerHTML += `${" ".repeat(6)}${jVarLoopInsideSGSTValue.padEnd(10)}\n`;

    });
    k1.innerHTML += `----------------------------------------------\n`
    k1.innerHTML += `Total: ${localGstToata.innerHTML}         ${localTotalGSTAmountId.innerHTML}        ${localTotalSGSTAmountId.innerHTML} \n`;
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