import { StartFunc as StartFuncFromLocalStorage } from "../../../../../FromLocalStorage/Customers/AsArray.js";

let StartFunc = () => {
    let jVarLocalDataToShow = StartFuncFromLocalStorage();
    console.log("------- : ", jVarLocalDataToShow);
    var $table = $('#table');

    $table.bootstrapTable({ data: jVarLocalDataToShow });
};

export { StartFunc }