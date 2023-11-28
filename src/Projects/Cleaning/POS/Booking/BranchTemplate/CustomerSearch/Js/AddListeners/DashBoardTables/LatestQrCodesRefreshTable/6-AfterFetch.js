let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;
    let jVarLocalWithDiff = jFLocalShowDateDiffInMinSec({ inData: jVarLocalData });

    // let jVarLocalData = jFLocalToArray({ inDataToShow: inFromFetch.JsonData});
    var $table = $('#LatestQrCodesTable');

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

let jFLocalInsertQrCodeData = ({ inData , inQrCodeData }) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {

        element.QrCodes = inQrCodeData[element.pk];
        element.IsQrCodesRaised = false;
        if (element.pk in inQrCodeData) {
            element.IsQrCodesRaised = true;
        };

        return element;
    });
    return jVarLocalReturnArray;
};


let jFLocalInsertAggValues = ({ inData }) => {
    let jVarLocalReturnObject = [];

    jVarLocalReturnObject = Object.entries(inData).map(element => {
        element[1].AggValues = {};
        element[1].AggValues.ItemDetails = `${Object.keys(element[1].ItemsInOrder).length} / ${Object.values(element[1].ItemsInOrder).map(p => p.Pcs).reduce((acc, val) => acc + val)}`;
        element[1].AggValues.SettlementAmount = element[1].CheckOutData.CardAmount + element[1].CheckOutData.CashAmount + element[1].CheckOutData.UPIAmount;
        element[1].IsSettled = false;

        if (Object.keys(element[1].CheckOutData).length > 0) {
            element[1].IsSettled = true;
        };
        // CheckOutData


        return element[1];
    });

    return jVarLocalReturnObject;
};


export { StartFunc };