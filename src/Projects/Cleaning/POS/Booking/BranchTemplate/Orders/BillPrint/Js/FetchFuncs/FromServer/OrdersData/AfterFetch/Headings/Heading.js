let StartFunc = ({ inBillNumberid, inCustomerNameid, inMobileNumberid, inBookingDateid, inDeliveryDateid }) => {
    jFLocalToInnerHtmlBillNumberid({ inBillNumberid });
    jFLocalToInnerHtmlCustomerNameid({ inCustomerNameid });
    jFLocalToInnerHtmlMobileNumberid({ inMobileNumberid });
    jFLocalToInnerHtmlBookingDateid({ inBookingDateid });
}

let jFLocalToInnerHtmlBillNumberid = ({ inBillNumberid }) => {
    let jVarLocalHtmlId = 'BillNumberid';
    let jVarLocalBillNumberid = document.getElementById(jVarLocalHtmlId);
    jVarLocalBillNumberid.innerHTML = inBillNumberid;
};

let jFLocalToInnerHtmlCustomerNameid = ({ inCustomerNameid }) => {
    let jVarLocalHtmlId = 'CustomerNameid';
    let jVarLocalCustomerNameid = document.getElementById(jVarLocalHtmlId);
    jVarLocalCustomerNameid.innerHTML = inCustomerNameid;
};

let jFLocalToInnerHtmlMobileNumberid = ({ inMobileNumberid }) => {
    let jVarLocalHtmlId = 'MobileNumberid';
    let jVarLocalMobileNumberid = document.getElementById(jVarLocalHtmlId);
    jVarLocalMobileNumberid.innerHTML = inMobileNumberid;
};

let jFLocalToInnerHtmlBookingDateid = ({ inBookingDateid }) => {
    let jVarLocalHtmlId = 'BookingDateid';
    let jVarLocalBookingDateid = document.getElementById(jVarLocalHtmlId);
    jVarLocalBookingDateid.innerHTML = inBookingDateid;
};

export { StartFunc };