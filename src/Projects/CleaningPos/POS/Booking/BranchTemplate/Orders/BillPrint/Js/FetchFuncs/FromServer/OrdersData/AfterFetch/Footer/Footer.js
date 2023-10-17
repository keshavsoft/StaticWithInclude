let StartFunc = ({ inDiscountAmountid, inRoundOffid, inCGSTid, inSGSTid, inCashAmount, inCardAmount, inUPIAmount }) => {
    let inGrandTotalid = inCashAmount + inCardAmount + inUPIAmount;

    jFLocalToInnerHtmlDiscountAmountId({ inDiscountAmountid });
    jFLocalToInnerHtmlRoundOffid({ inRoundOffid });
    jFLocalToInnerHtmlCGSTid({ inCGSTid });
    jFLocalToInnerHtmlSGSTid({ inSGSTid });
    jFLocalToInnerHtmlGrandTotalid({ inGrandTotalid });

}

let jFLocalToInnerHtmlDiscountAmountId = ({ inDiscountAmountid }) => {
    let jVarLocalHtmlId = 'DiscountAmountId';
    let jVarLocalDiscountAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDiscountAmountId.innerHTML = inDiscountAmountid;
};

let jFLocalToInnerHtmlRoundOffid = ({ inRoundOffid }) => {
    let jVarLocalHtmlId = 'RoundOffid';
    let jVarLocalRoundOffid = document.getElementById(jVarLocalHtmlId);
    jVarLocalRoundOffid.innerHTML = inRoundOffid;
};

let jFLocalToInnerHtmlSGSTid = ({ inSGSTid }) => {
    let jVarLocalHtmlId = 'SGSTid';
    let jVarLocalSGSTid = document.getElementById(jVarLocalHtmlId);
    jVarLocalSGSTid.innerHTML = inSGSTid;
};

let jFLocalToInnerHtmlCGSTid = ({ inCGSTid }) => {
    let jVarLocalHtmlId = 'CGSTid';
    let jVarLocalCGSTid = document.getElementById(jVarLocalHtmlId);
    jVarLocalCGSTid.innerHTML = inCGSTid;
};

let jFLocalToInnerHtmlGrandTotalid = ({ inGrandTotalid }) => {
    let jVarLocalHtmlId = 'GrandTotalid';
    let jVarLocalGrandTotalid = document.getElementById(jVarLocalHtmlId);
    jVarLocalGrandTotalid.innerHTML = inGrandTotalid;
};
export { StartFunc };