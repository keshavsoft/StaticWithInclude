import { StartFunc as StartFuncItemDetails } from "../../FormLoad/ItemDetails/EntryFile.js";

let StartFunc = async ({ inDataToShow }) => {
    console.log("inDataToShow::",inDataToShow);
    let jVarLocalDataToShow = jFLocalToArray({ inDataToShow });
    jVarGlobalPresentViewData = await StartFuncItemDetails();
    console.log("jVarGlobalPresentViewData:",jVarGlobalPresentViewData);
    jFLocalHideSpinner();

    var $table = $('#table');
    $table.bootstrapTable({
        data: jVarLocalDataToShow,
    });
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";

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