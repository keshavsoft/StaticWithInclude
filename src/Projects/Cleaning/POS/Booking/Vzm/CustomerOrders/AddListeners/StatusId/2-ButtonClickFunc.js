import { StartFunc as StartFuncNewCustomers } from "./FetchFuncs/NewCustomers/EntryFile.js";
import { StartFunc as StartFuncFrequentCustomers } from "./FetchFuncs/FrequentCustomers/EntryFile.js";
import { StartFunc as StartFuncTodayCustomers } from "./FetchFuncs/TodayCustomers/EntryFile.js";

let StartFunc = () => {
    StartFuncNewCustomers();
    StartFuncFrequentCustomers();
    StartFuncTodayCustomers();
};

export { StartFunc };