import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";
import { StartFunc as StartFuncToFactoryStatusCheck } from "./FetchFromFuncs/AfterFetch/ToFactoryStatus/EntryFile.js";
import { StartFunc as StartFuncGeneratedQrCodes } from "./Promises/GeneratedQrCodes/PostFetch.js";
import { StartFunc as StartFuncToFactory } from "./Promises/ToFactory/PostFetch.js";

let StartFunc1 = () => {
    if (StartFuncCheckFunc()) {
        StartFuncFetchFromFuncs().then();
    };
};

async function fetchABC() {
    const [a, b] = await Promise.all([StartFuncGeneratedQrCodes(), StartFuncToFactory()]);

    if (a.KTF && b.KTF) {
        let jVarLocalArray = jFLocalToArray({ inDataToShow: a.JsonData });
        let jVarLocalArrayWithFactory = jFLocalToFactory({
            inArray: jVarLocalArray,
            inFactoryData: b.JsonData
        });
        console.log("jVarLocalArray : ", a, b, jVarLocalArrayWithFactory);

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

let StartFunc = () => {
    fetchABC().then();
};

let StartFunc2 = () => {
    const promises = [
        StartFuncGeneratedQrCodes,
        StartFuncToFactory
    ];

    Promise.all(promises).then((results) => {
        console.log("results", results);
    })
};

export { StartFunc };
