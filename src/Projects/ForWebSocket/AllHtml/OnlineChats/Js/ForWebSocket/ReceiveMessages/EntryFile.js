import { StartFunc as StartFuncAsJson } from "./AsJson.js";
import { StartFunc as StartFuncAsString } from "./AsString.js";

let StartFunc = (event) => {
    try {
        let jVarLocalJsonData = JSON.parse(event.data);
        console.log("clientsJson----------",jVarLocalJsonData);
        StartFuncAsJson({ inJsonData: jVarLocalJsonData });
       
    } catch (error) {
        StartFuncAsString({ inStringData: event.data});
    }
};

export { StartFunc };