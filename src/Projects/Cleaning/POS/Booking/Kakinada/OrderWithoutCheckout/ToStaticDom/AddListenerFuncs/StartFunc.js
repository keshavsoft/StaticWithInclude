import { StartFunc as StartFuncCategoryRadio } from "./CategoryRadio/StartFunc.js";
import { StartFunc as StartFuncItemSelect } from "./ItemSelect/OnChange/StartFunc.js";
import { StartFunc as StartFuncAddItemButton } from "../../AddListeners/AddItemToServer/1-ClickAssign.js";
import { StartFunc as StartFuncCheckOutButton } from "../../AddListeners/OrderInfo/CheckOutButton/ClickFunc.js";

let StartFunc = () => {
    StartFuncItemSelect();
    StartFuncCategoryRadio();
    StartFuncAddItemButton();
    StartFuncCheckOutButton();
};

export { StartFunc };