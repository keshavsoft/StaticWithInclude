import CommonKeys from "../Keys.json" assert { type: "json" };

let StartFunc = ({ inCashAmount, inCardAmount, inUPIAmount }) => {
    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.CheckOutData);
    let jVarLocalParsed = JSON.parse(jVarLocalFromLocalStorage);

    jVarLocalParsed.CashAmount = inCashAmount;
    jVarLocalParsed.CardAmount = inCardAmount;
    jVarLocalParsed.UPIAmount = inUPIAmount;
    jVarLocalParsed.isSettled = true;

    localStorage.setItem(CommonKeys.CheckOutData, JSON.stringify(jVarLocalParsed));
};  

export { StartFunc };