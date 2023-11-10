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
        let jVarLocalWithScanData = localJfScanDateInsert({ IndataArray: jVarLocalArray, inDataScan: b.JsonData });
        let LocalTimeSetData = jFLocalShowDateDiffInMinSec({ inData: jVarLocalWithScanData });

        var $table = $('#table');

        $table.bootstrapTable("destroy").bootstrapTable({
            data: LocalTimeSetData,
        });
    };
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

const localJfScanDateInsert = ({ IndataArray, inDataScan }) => {
    let localReturnArray = [];

    localReturnArray = IndataArray.map((element) => {
        element.Status = "Sent";

        if (element.pk in inDataScan) {
            element.Status = "Accepted";
            element.scanDateTime = inDataScan[element.pk].DateTime
        };
        return element;
    });

    return localReturnArray;

};

export { StartFunc };
