let StartFunc = ({ inFromFetch }) => {
    let data = inFromFetch;
    let BillNumber = data.JsonData.pk
   jFLocalToInnerHtmlBillNumberid({ inBillNumberid: BillNumber });

};

let jFLocalToInnerHtmlBillNumberid = ({ inBillNumberid }) => {
    let jVarLocalHtmlId = 'BillNumberid';
    let jVarLocalBillNumberid = document.getElementById(jVarLocalHtmlId);
    jVarLocalBillNumberid.innerHTML = inBillNumberid;
};
export { StartFunc };