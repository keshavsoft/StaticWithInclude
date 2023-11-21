import { StartFunc as StartFuncAsJson } from "./AsJson.js";
import { StartFunc as StartFuncAsString } from "./AsString.js";

let StartFunc = (event) => {
    try {
        let jVarLocalJsonData = JSON.parse(event.data);
        StartFuncAsJson({ inJsonData: jVarLocalJsonData });

    } catch (error) {
        StartFuncAsString({ inStringData: event.data });
    }
};

export { StartFunc };