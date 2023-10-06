import { StartFunc as StartFuncFromLocalStorage } from "./FromLocalStorage/Items.js";
import { StartFunc as StartFuncFetchFuncs } from "./FetchFuncs/Items/EntryFile.js";

let StartFunc = async () => {

    await StartFuncFetchFuncs();

    let jVarLocalDataNeeded = StartFuncFromLocalStorage();
    let jVarLocalDataToShow = jFLocalToArray({ inDataToShow: jVarLocalDataNeeded });
    var $table = $('#table');

    $table.bootstrapTable({ data: jVarLocalDataToShow });

};

let jFLocalToArray = ({ inDataToShow }) => {
    let jVarLocalArray = [];
    Object.entries(inDataToShow).forEach(
        ([key, value]) => {
            jVarLocalArray.push({
                ...value,
                pk: key
            });
        }
    );

    return jVarLocalArray;
};

export { StartFunc }