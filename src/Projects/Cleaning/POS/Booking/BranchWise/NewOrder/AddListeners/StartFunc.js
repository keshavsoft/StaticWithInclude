import { StartFuncs as StartFuncItemButtonClick } from "./AddItem/AddItemButton.js";
import { StartFunc as StartFuncAddOn } from "./AddOn/ButtonClick.js";
import { StartFunc as StartFuncOnChange } from "./OnChange/StartFunc.js";
import { StartFunc as StartFuncMainScreen } from "./MainScreen/MenuIdCollapse.js";
// import { StartFunc as StartFuncCheckOutButton } from "./OrderInfo/CheckOutButton.js";
import { StartFunc as StartFuncCategoryRadio } from "./CategoryRadio/StartFunc.js";

let StartFunc = () => {
    // StartFuncCheckOutButton();
    StartFuncItemButtonClick();
    StartFuncAddOn();
    StartFuncOnChange();
    StartFuncMainScreen();
    //StartFuncCategoryRadio();

    // let jVarLocalRadios = document.querySelectorAll('input[type=radio]');

    // Array.from(jVarLocalRadios).forEach(link => {
    //     link.addEventListener('click', function (event) {
    //         let jVarLocalCurrentTarget = event.currentTarget;
    //         let jVarLocalCategory = jVarLocalCurrentTarget.dataset.category;

    //         StartFuncItemsInCategory({ inCategory: jVarLocalCategory });
    //     });
    // });

};

export { StartFunc };