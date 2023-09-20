import { StartFunc as StartFuncNewCustomers } from "./FetchFuncs/NewCustomers/EntryFile.js";
import { StartFunc as StartFuncFrequentCustomers } from "./FetchFuncs/FrequentCustomers/EntryFile.js";
import { StartFunc as StartFuncTodayCustomers } from "./FetchFuncs/TodayCustomers/EntryFile.js";
import { StartFunc as StartFuncLatestOrders } from "./FetchFuncs/LatestOrders/EntryFile.js";

let StartFunc = () => {
    StartFuncNewCustomers();
    StartFuncFrequentCustomers().then();
    StartFuncTodayCustomers();
    StartFuncLatestOrders();
};

export { StartFunc };