const StartFunc = () => {
    let jVarLocalBillData = localStorage.getItem("BillData");
    let jVarLocalBillDataAsJson = JSON.parse(jVarLocalBillData);

    let k1 = document.getElementById("PrintDiv");
    let k2 = document.getElementById("TemplateForFirmHeading");
    let k3 = document.getElementById("TemplateForFirmHeadId");

    k1.innerHTML += k3.innerHTML;
    k1.innerHTML += k2.innerHTML;
    k1.innerHTML += `---------------------------------------------\n`
    k1.innerHTML += `               <span class="inner-pre" style="font-size: 16px; font-weight: bold;">TAX INVOICE</span> \n`
    k1.innerHTML += `---------------------------------------------\n`
    k1.innerHTML += `  <span class="inner-pre" style="font-size: 16px; font-weight: bold;">Customer :   ${jVarLocalBillDataAsJson.CustomerName}</span>\n`;
    k1.innerHTML += `  <span class="inner-pre" style="font-size: 16px; font-weight: bold;">Phone    :   ${jVarLocalBillDataAsJson.CustomerNumber}</span>\n`;
    k1.innerHTML += `----------------------------------------------\n`
    k1.innerHTML += `  Bill : ${jVarLocalBillDataAsJson.BillNumber}   Date : ${jVarLocalBillDataAsJson.Date}  Time : 7:30\n`;
};

export { StartFunc };