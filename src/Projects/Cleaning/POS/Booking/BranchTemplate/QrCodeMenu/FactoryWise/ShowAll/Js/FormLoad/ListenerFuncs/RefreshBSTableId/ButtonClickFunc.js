import { StartFunc as StartFuncGeneratedQrCodes } from "./Promises/GeneratedQrCodes/PostFetch.js";
import { StartFunc as StartFuncToFactory } from "./Promises/ToFactory/PostFetch.js";
import { StartFunc as StartFuncToFactoryDC } from "./Promises/ToFactoryDC/PostFetch.js";

let StartFunc = async () => {
    const [a, b, c] = await Promise.all([StartFuncGeneratedQrCodes(), StartFuncToFactory(), StartFuncToFactoryDC()]);

    if (a.KTF && b.KTF && c.KTF) {
        let jVarLocalDcData = c.JsonData;

        let jVarLocalArray = jFLocalToArray({ inDataToShow: a.JsonData });

        let jVarLocalArrayWithFactory = jFLocalToFactory({
            inArray: jVarLocalArray,
            inFactoryData: b.JsonData
        });

        let jVarLocalDcArray = jFLocalDcData({
            inArray: jVarLocalArrayWithFactory,
            inDcData: jVarLocalDcData
        });

        jFLocalHideWashingMachineImageId();

        var $table = $('#table');

        $table.bootstrapTable("destroy").bootstrapTable({
            data: jVarLocalDcArray,
        });
    };
};

let jFLocalHideWashingMachineImageId = () => {
    let jVarLocalSpinnerId = document.getElementById("WashingMachineImageId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalToFactory = ({ inArray, inFactoryData }) => {
    let jVarLocalArray = inArray;

    let jVarLocalReturnArray = jVarLocalArray.map(element => {
        element.Status = "Not Sent";
        
        if (element.pk in inFactoryData) {
            element.Status = "To Factory";
            element.DcScanDetails = {};
            element.DcScanDetails.VoucherRef = inFactoryData[element.pk].VoucherRef;
        };

        return element;
    });

    return jVarLocalReturnArray;
};

let jFLocalDcData = ({ inArray, inDcData }) => {
    let jVarLocalArray = inArray;

    let jVarLocalReturnArray = jVarLocalArray.map(element => {
        if ("DcScanDetails" in element) {
            element.DcDetails = {};
            element.DcDetails = { ...inDcData[element.DcScanDetails.VoucherRef] };
        };

        return element;
    });

    return jVarLocalReturnArray;
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

export { StartFunc };
