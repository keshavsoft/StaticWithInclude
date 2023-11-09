import { StartFunc as StartFuncGeneratedQrCodes } from "./Promises/GeneratedQrCodes/PostFetch.js";
import { StartFunc as StartFuncToFactory } from "./Promises/FactoryScan/PostFetch.js";

let StartFunc = async () => {
    const [a, b] = await Promise.all([StartFuncGeneratedQrCodes(), StartFuncToFactory()]);
    console.log("a, b",a, b);

    if(Object.keys(a.JsonData).length === 0){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Items not found in DC"
        });
    };

    if (a.KTF && b.KTF) {
        jFLocalHideSpinner();
        let jVarLocalArray = jFLocalToArray({ inDataToShow: a.JsonData });

        let jVarLocalArrayWithFactory = jFLocalToFactory({
            inArray: jVarLocalArray,
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

export { StartFunc };
