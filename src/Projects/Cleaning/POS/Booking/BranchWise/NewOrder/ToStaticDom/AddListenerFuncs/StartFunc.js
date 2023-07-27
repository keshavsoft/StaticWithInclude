import { StartFunc as StartFuncCategoryRadio } from "./CategoryRadio/StartFunc.js";
import { StartFunc as StartFuncItemSelect } from "./ItemSelect/OnChange/StartFunc.js";
import { StartFunc as StartFuncCheckOutButton } from "../../AddListeners/OrderInfo/CheckOutButton/ClickEvent.js";

let StartFunc = () => {
    StartFuncCheckOutButton();
    StartFuncItemSelect();
    StartFuncCategoryRadio();
};

export { StartFunc };