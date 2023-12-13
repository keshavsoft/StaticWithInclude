import { StartFunc as StartFuncInsertSerial } from "./InsertSerial.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
let StartFunc = async () => {
    let jVarLocalUrl = "/JSONUser/Users/Api/Show/SteUpUsers";
    let response = await fetch(jVarLocalUrl);
    let data = await response.json();

    StartFuncAfterFetch({ inDataToShow: data });



    // StartFuncInsertSerial({ inData: data });

    // let jVarLocalRawTemplate = document.getElementById("HbsTemplateForBody").innerHTML;

    // document.getElementById("KTableBodyId").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(data);
};

export { StartFunc };