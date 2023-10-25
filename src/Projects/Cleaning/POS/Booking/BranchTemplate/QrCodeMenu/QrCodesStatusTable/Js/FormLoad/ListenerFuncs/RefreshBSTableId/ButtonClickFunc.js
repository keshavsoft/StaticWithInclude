import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";
import { StartFunc as StartFuncToFactoryStatusCheck } from "./FetchFromFuncs/AfterFetch/ToFactoryStatus/EntryFile.js";

let StartFunc1 = () => {
    if (StartFuncCheckFunc()) {
        StartFuncFetchFromFuncs().then();
    };
};

let StartFunc = () => {
    const promises = [
        new Promise((resolve, reject) => setTimeout(resolve, 3000, StartFuncFetchFromFuncs())),
        new Promise((resolve, reject) => setTimeout(resolve, 3000, StartFuncToFactoryStatusCheck()))
    ]
    Promise.all(promises).then((results) => {
        console.log("results", results);
    })
};

export { StartFunc };
