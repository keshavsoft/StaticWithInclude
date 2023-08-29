import { StartFunc as StartFuncFromLocalStorage } from "./FromLocalStorage/Items.js";
import { StartFunc as StartFuncFetchFuncs } from "./FetchFuncs/Items/EntryFile.js";

let StartFunc = async () => {

    await StartFuncFetchFuncs();

    let jVarLocalDataNeeded = StartFuncFromLocalStorage();

    if (jVarLocalDataNeeded !== null) {
        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
        document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(jVarLocalDataNeeded);
    };

    console.log("jVarLocalDataNeeded : ", jVarLocalDataNeeded);
};

export { StartFunc }