import { StartFunc as StartFuncClubAddOnData } from "./PrepareForOrderItemsTable/ClubAddOnData.js";
import { StartFunc as StartFuncAddItemData } from "./PrepareForOrderItemsTable/AddItemDataFunc.js";
import { StartFunc as StartFuncFooterData } from "./PrepareForOrderItemsTable/FooterDataFunc.js";

let StartFunc = () => {
    LocalFuncClubData();
};

let LocalFuncClubData = () => {
    let jVarLocalStorageKey = "OrderItemsToShow";

    let jVarLocalToShowData = { BodyData: {}, FooterData: {} };
    jVarLocalToShowData.BodyData = StartFuncAddItemData();

    StartFuncClubAddOnData({ inItemData: jVarLocalToShowData.BodyData });
    
    let jVarLocalFromFooter = StartFuncFooterData({ inData: jVarLocalToShowData.BodyData});

    jVarLocalToShowData.FooterData={jVarLocalFromFooter};


    localStorage.setItem(jVarLocalStorageKey, JSON.stringify(jVarLocalToShowData));
};

export { StartFunc };