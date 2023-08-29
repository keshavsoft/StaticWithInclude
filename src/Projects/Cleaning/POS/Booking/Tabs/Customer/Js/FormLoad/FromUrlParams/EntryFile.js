import { StartFunc as StartFuncFromSave } from "./FromSave/ChangeRowColour/EntryFile.js";

let StartFunc = () => {
    let jVarLocalCustomer = getUrlQueryParams({ inGetKey: "FromSave" })

    if (jVarLocalCustomer === "true") {
        console.log("Hai");
        StartFuncFromSave({});
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }