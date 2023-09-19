import { StartFunc as StartFuncButtonClickFunc } from "./FetchFuncs/FromServer/OrdersData/2-ButtonClickFunc.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncButtonClickFunc();

    if (jVarLocalDataNeeded !== null) {
        // let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
        // document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(jVarLocalDataNeeded);
    };
};

export { StartFunc }