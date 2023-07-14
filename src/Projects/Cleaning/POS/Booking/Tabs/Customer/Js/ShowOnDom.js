import { StartFunc as StartFuncFetchFuncs } from "./FetchFuncs/PostFetch.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();

    if (jVarLocalDataNeeded !== null) {
        if (jVarLocalDataNeeded.KTF) {
            let jVarLocalToHbs = {
                CustomerNames: jVarLocalDataNeeded.DataFromServer[0].KData.TableData
            };

            console.log("jVarLocalToHbs : ", jVarLocalToHbs);
            let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
            document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(jVarLocalToHbs);
        };
    };
};

let StartFunc1 = async () => {
    let jVarLocalDataNeeded = StartFuncFetchFuncs();

    if (jVarLocalDataNeeded !== null) {
        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
        document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(jVarLocalDataNeeded);
    };
};

export { StartFunc }