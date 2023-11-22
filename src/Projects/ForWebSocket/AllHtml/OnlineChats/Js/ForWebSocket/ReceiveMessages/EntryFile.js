import { StartFunc as StartFuncAsJson } from "./AsJson.js";
import { StartFunc as StartFuncAsString } from "./AsString.js";
let CommonShowNotification = false;

let StartFunc = (event) => {
    try {
        let jVarLocalJsonData = JSON.parse(event.data);
        StartFuncAsJson({ inJsonData: jVarLocalJsonData, inShowNotification: CommonShowNotification });

    } catch (error) {
        StartFuncAsString({ inStringData: event.data, inShowNotification: CommonShowNotification });
    }
};

export { StartFunc };