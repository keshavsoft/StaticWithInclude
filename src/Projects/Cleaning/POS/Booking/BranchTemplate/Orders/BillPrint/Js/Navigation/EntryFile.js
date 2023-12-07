import { StartFunc as StartFuncOrdersShow } from "./OrdersShow/EntryFile.js";
import { StartFunc as StartFuncTodayOrders } from "./TodayOrders/EntryFile.js";
import { StartFunc as StartFuncAllOrders } from "./AllOrders/EntryFile.js";
import { StartFunc as StartFuncQrCodes } from "./QrCodes/EntryFile.js";
import { StartFunc as StartFuncQrCodesTable } from "./QrCodesTable/EntryFile.js";
import { StartFunc as StartFuncOrdersBSTable } from "./OrdersBSTable/EntryFile.js";
import { StartFunc as StartFuncQrCodesPrint } from "./QrCodesPrint/EntryFile.js";
import { StartFunc as StartFuncBillPrint } from "./BillPrint/EntryFile.js";
import { StartFunc as StartFuncParent } from "./Parent/EntryFile.js";

const StartFunc = () => {
    StartFuncOrdersShow();
    StartFuncTodayOrders();
    StartFuncAllOrders();
    StartFuncQrCodes();
    StartFuncQrCodesTable();
    StartFuncOrdersBSTable();
    StartFuncQrCodesPrint();
    StartFuncBillPrint();
    StartFuncParent();

};

export { StartFunc };