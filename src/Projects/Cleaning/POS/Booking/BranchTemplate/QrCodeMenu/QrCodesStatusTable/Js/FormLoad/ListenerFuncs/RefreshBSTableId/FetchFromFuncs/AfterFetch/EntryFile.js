// import { StartFunc as StartFuncKSMainTableRowDeleteClass } from "./KSMainTableRowDeleteClass/1-ClickAssign.js";
// import { StartFunc as StartFuncToFactoryStatusCheck } from "./ToFactoryStatus/EntryFile.js";

let StartFunc = async ({ inDataToShow }) => {
    jFLocalHideSpinner();
    let jVarLocalDataToShow = jFLocalToArray({ inDataToShow });
    // await StartFuncToFactoryStatusCheck();

    var $table = $('#table');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarLocalDataToShow,
    });

    // StartFuncKSMainTableRowDeleteClass();
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

let jFLocalHideSpinner=()=>{
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";

};

export { StartFunc }