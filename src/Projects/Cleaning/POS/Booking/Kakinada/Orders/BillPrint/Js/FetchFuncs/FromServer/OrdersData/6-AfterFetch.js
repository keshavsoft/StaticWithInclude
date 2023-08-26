import { StartFunc as StartFuncHeading } from "./AfterFetch/Headings/Heading.js";
import { StartFunc as StartFuncBody } from "./AfterFetch/ItemsTable/Body.js";
import { StartFunc as StartFuncFooter } from "./AfterFetch/Footer/Footer.js";

let StartFunc = ({ inFromFetch }) => {
    let data = inFromFetch;
    console.log("data", data);
    let BillNumber = data.JsonData.pk;
    let CustomerName = data.JsonData.CustomerData.CustomerName;
    let CustomerMobile = data.JsonData.CustomerData.CustomerMobile;
    let BookingDate = data.JsonData.OrderData.Currentdateandtime;
    let ItemData = data.JsonData.ItemsInOrder;
    let DiscountAmount = data.JsonData.CheckOutData.GstData.DiscountAmount;
    let CGST = data.JsonData.CheckOutData.GstData.CGST;
    let SGST = data.JsonData.CheckOutData.GstData.SGST;
    let RoundOff = data.JsonData.CheckOutData.RoundOff;
    let CashAmount = data.JsonData.CheckOutData.CashAmount;
    let CardAmount = data.JsonData.CheckOutData.CardAmount;
    let UPIAmount = data.JsonData.CheckOutData.UPIAmount;
    
    StartFuncHeading({
        inBillNumberid: BillNumber,
        inCustomerNameid: CustomerName,
        inMobileNumberid: CustomerMobile,
        inBookingDateid: BookingDate,
    });
    StartFuncBody({inItemData: ItemData});
    StartFuncFooter({
        inDiscountAmountid: DiscountAmount,
        inCGSTid: CGST,
        inSGSTid: SGST,
        inRoundOffid: RoundOff,
        inCashAmount: CashAmount,
        inCardAmount: CardAmount,
        inUPIAmount: UPIAmount
    });
};
export { StartFunc };