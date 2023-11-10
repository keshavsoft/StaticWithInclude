import { StartFunc as StartFuncGeneratedQrCodes } from "./Promises/GeneratedQrCodes/PostFetch.js";
import { StartFunc as StartFuncToFactory } from "./Promises/FactoryScan/PostFetch.js";

let StartFunc = async () => {
    const [a, b] = await Promise.all([StartFuncGeneratedQrCodes(), StartFuncToFactory()]);

    if (Object.keys(a.JsonData).length === 0) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Items not found in DC"
        });
    };

    if (a.KTF && b.KTF) {
        jFLocalHideSpinner();
        let jVarLocalArray = jFLocalToArray({ inDataToShow: a.JsonData });
        let localData = localJfScanDataeInsert({ IndataArray: jVarLocalArray, inDataScan: b.JsonData });
        let LocalTimeSetData = jFLocalShowDateDiffInMinSec({ inData: localData });

        let jVarLocalArrayWithFactory = jFLocalToFactory({
            inArray: LocalTimeSetData,
            inFactoryData: b.JsonData
        });

        var $table = $('#table');

        $table.bootstrapTable("destroy").bootstrapTable({
            data: jVarLocalArrayWithFactory,
        });
    };
};


let jFLocalToFactory = ({ inArray, inFactoryData }) => {

    let jVarLocalArray = inArray;

    let jVarLocalReturnArray = jVarLocalArray.map(element => {
        element.Status = "Not Sent";

        if (element.pk in inFactoryData) {
            element.Status = "Sent";
            element.DcScanDetails = {};
            element.DcScanDetails.VoucherRef = inFactoryData[element.pk].VoucherRef;
        };

        return element;
    });

    return jVarLocalReturnArray;
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

let jFLocalShowDateDiffInMinSec = ({ inData }) => {
    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {
        element.ShowRunTime = {};
        element.ScanTime = {};
        //  element.ShowRunTime.KInterVal = (new Date() - new Date(element.OrderData.Currentdateandtime)) / 1000;

        element.ShowRunTime.KInterVal = jFLocalKInterval({ inCurrentdateandtime: element.DateTime });
        element.ScanTime.KInterVal = jFLocalKInterval({ inCurrentdateandtime: element.scanData });

        return element;
    });
    return jVarLocalReturnArray;
};

let jFLocalKInterval = ({ inCurrentdateandtime }) => {
    if (inCurrentdateandtime === "Not sent") {
        return "Not sent"
    };

    var diffMs = (new Date() - new Date(inCurrentdateandtime)); // milliseconds between now & Christmas
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

    return diffDays + " days, " + diffHrs + " hours, " + diffMins + " min...";

    // console.log(diffDays + " days, " + diffHrs + " hours, " + diffMins + " min...");
};

const localJfScanDataeInsert = ({ IndataArray, inDataScan }) => {
    let SacanArray = Object.values(inDataScan);
    let localArray = [];

    IndataArray.forEach((element) => {

        element.scanData = "Not sent"
        SacanArray.map((ele) => {
            if (element.pk === ele.pk) {
                element.scanData = ele.DateTime
            };
        });
        localArray.push(element)
        return element;
    });
    return localArray;

};

export { StartFunc };
