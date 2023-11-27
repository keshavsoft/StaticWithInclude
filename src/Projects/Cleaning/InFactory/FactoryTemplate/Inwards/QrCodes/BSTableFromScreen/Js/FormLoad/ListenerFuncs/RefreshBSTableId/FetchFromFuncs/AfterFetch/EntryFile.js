// import { StartFunc as StartFuncKSMainTableRowDeleteClass } from "./KSMainTableRowDeleteClass/1-ClickAssign.js";
// import { StartFunc as StartFuncPrepareColumns } from "./BuildTable/PrepareColumns.js";

let StartFunc = ({ inDataToShow }) => {
    jFLocalHideSpinner();
    // let jVarLocalDataToShow = inDataToShow;
    let jVarLocalDataToShow = jFLocalToArray({ inDataToShow });
    let LocalTimeSetData = jFLocalShowDateDiffInMinSec({ inData: jVarLocalDataToShow });



    var $table = $('#table');

    // StartFuncPrepareColumns({ data: jVarLocalDataToShow.DataFromServer[0].KData.TableColumns })

    $table.bootstrapTable("destroy").bootstrapTable({
        data: LocalTimeSetData,
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

let jFLocalShowDateDiffInMinSec = ({ inData }) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {

        element.SentInterVal = jFLocalKInterval({ inCurrentdateandtime: element.DateTime });
        element.ScanDateTimeInterVal = jFLocalKInterval({ inCurrentdateandtime: element.scanDateTime });

        return element;
    });
    return jVarLocalReturnArray;
};

let jFLocalKInterval = ({ inCurrentdateandtime }) => {
    if (inCurrentdateandtime === undefined) {
        return "";
    }
    var diffMs = (new Date() - new Date(inCurrentdateandtime)); // milliseconds between now & Christmas
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

    return diffDays + " days, " + diffHrs + " hours, " + diffMins + " min...";

    // console.log(diffDays + " days, " + diffHrs + " hours, " + diffMins + " min...");
};

let jFLocalHideSpinner=()=>{
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";

};

export { StartFunc }