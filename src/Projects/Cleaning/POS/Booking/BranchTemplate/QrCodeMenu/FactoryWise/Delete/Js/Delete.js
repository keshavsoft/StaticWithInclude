import { StartFunc as StartFuncShowOnDomEntry } from "./ShowOnDom/Entry.js";
import { StartFunc as AddListenersEntry } from "./AddListeners/Entry.js";

const StartFunc = () => {
    console.log("jjjj");
    StartFuncShowOnDomEntry().then(() => {
        AddListenersEntry();
    });
};

StartFunc();