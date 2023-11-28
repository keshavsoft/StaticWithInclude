let StartFunc = async({ inFromFetch }) => {
    let jVarLocalData = inFromFetch;
    let jVarLocalWithDiff = jFLocalShowDateDiffInMinSec({ inData: jVarLocalData });

    // let jVarLocalData = jFLocalToArray({ inDataToShow: inFromFetch.JsonData});
    var $table = $('#LatestDCTable');

    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarLocalWithDiff,
    });
};

let jFLocalShowDateDiffInMinSec = ({ inData }) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {
        element.ShowRunTime = {};
        //  element.ShowRunTime.KInterVal = (new Date() - new Date(element.OrderData.Currentdateandtime)) / 1000;

        element.ShowRunTime.KInterVal = jFLocalKInterval({ inCurrentdateandtime: element.DateTime });

        return element;
    });
    return jVarLocalReturnArray;
};


let jFLocalKInterval = ({ inCurrentdateandtime }) => {
    var diffMs = (new Date() - new Date(inCurrentdateandtime)); // milliseconds between now & Christmas
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

    return diffDays + " days, " + diffHrs + " hours, " + diffMins + " min...";

    // console.log(diffDays + " days, " + diffHrs + " hours, " + diffMins + " min...");
};

export { StartFunc };