import { StartFunc as StartFuncGeneratedQrCodes } from "./Promises/GeneratedQrCodes/PostFetch.js";
import { StartFunc as StartFuncToFactory } from "./Promises/ToFactory/PostFetch.js";

let StartFunc = async () => {
    const [a, b] = await Promise.all([StartFuncGeneratedQrCodes(), StartFuncToFactory()]);

    if (a.KTF && b.KTF) {
        let jVarLocalArray = jFLocalToArray({ inDataToShow: a.JsonData });
        let jVarLocalArrayWithFactory = jFLocalToFactory({
            inArray: jVarLocalArray,
            inFactoryData: b.JsonData
        });

        jFLocalHideWashingMachineImageId();

        var $table = $('#table');

        $table.bootstrapTable("destroy").bootstrapTable({
            data: jVarLocalArrayWithFactory,
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
