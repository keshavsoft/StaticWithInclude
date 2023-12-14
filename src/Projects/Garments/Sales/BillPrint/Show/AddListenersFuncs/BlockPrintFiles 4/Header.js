const StartFunc = () => {
    let jVarLocalBillData = localStorage.getItem("BillData");
    let jVarLocalBillDataAsJson = JSON.parse(jVarLocalBillData);

    let k1 = document.getElementById("PrintDiv");
    let k2 = document.getElementById("TemplateForFirmHeading");
    let k3 = document.getElementById("TemplateForFirmHeadId");

     // k1.innerHTML += k3.innerHTML;
     k1.innerHTML += `               <span class="inner-pre" style="font-size: 33px; font-weight: ; font-family: Grobek Normal">MAGUVA</span>\n`;
     k1.innerHTML += `     <span class="inner-pre" style="font-size: 16px;">50-50-30/12/2, vandana plaza,</span>\n`
     k1.innerHTML += `        <span class="inner-pre" style="font-size: 16px;">GURUDWARA,VISHAKAPATNAM,</span>\n`
     k1.innerHTML += `<span class="inner-pre" style="font-size: 16px;">GSTIN:37ACJPL9300K2ZB,Ph:08912796666,</span>\n`
     k1.innerHTML += `                <span class="inner-pre" style="font-size: 16px;">State Code:37</span>\n`
     // k1.innerHTML += k2.innerHTML;
    k1.innerHTML += `---------------------------------------------\n`
    k1.innerHTML += `               <span class="inner-pre" style="font-size: 16px; font-weight: bold;">TAX INVOICE</span> \n`
    k1.innerHTML += `               <span class="inner-pre" style="font-size: 13px; font-weight: bold;"> ${jVarLocalBillDataAsJson.PaymentMode}</span> \n`
    k1.innerHTML += `---------------------------------------------\n`
    k1.innerHTML += `<span class="inner-pre" style="font-size: 16px; font-weight: bold;">Customer :  ${jVarLocalBillDataAsJson.CustomerName}</span>\n`;
    k1.innerHTML += `<span class="inner-pre" style="font-size: 16px; font-weight: bold;">Phone    :  ${jVarLocalBillDataAsJson.CustomerNumber}</span>\n`;
    k1.innerHTML += `----------------------------------------------\n`
    k1.innerHTML += `<span class="inner-pre" style="font-size: 16px;">Bill     : ${jVarLocalBillDataAsJson.BillNumber} </span>\n`;
    k1.innerHTML += `<span class="inner-pre" style="font-size: 16px;">TimeStamp: ${jVarLocalBillDataAsJson.DateTime}</span>\n`;

};

export { StartFunc };