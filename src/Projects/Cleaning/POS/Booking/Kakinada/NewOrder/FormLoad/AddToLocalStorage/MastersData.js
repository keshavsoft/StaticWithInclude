import { StartFunc as StartFuncAddToLocalStorageWashTypesInsert } from "./WashTypesInsert.js";
import { StartFunc as StartFuncFactoriesToLocalStorage } from "./Factories/FactoriesToLocalStorage.js";

let StartFunc = () => {
    StartFuncAddToLocalStorageWashTypesInsert();
    StartFuncFactoriesToLocalStorage();
};

export { StartFunc }