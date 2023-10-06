import { StartFunc as StartFuncFromLocalStorage } from "../../../../../../FromLocalStorage/Customers/AsArray.js";
// import { StartFunc as StartFuncKSMainTableRowDeleteClass } from "../../FetchFuncs/KSMainTableRowDeleteClass/1-ClickAssign.js";

let StartFunc = () => {
    let jVarLocalDataToShow = StartFuncFromLocalStorage();
    var $table = $('#table');

    $table.bootstrapTable({ data: jVarLocalDataToShow });

    // StartFuncKSMainTableRowDeleteClass();

};

export { StartFunc }