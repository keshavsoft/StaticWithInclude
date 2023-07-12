import { jFCreateFoldersToDom } from "./VoucherDelete/ShowOnDom/ShowOnDom.js";
import { StartFunc as StartFuncAddlisteners } from "./VoucherDelete/Addlisteners.js";

jFCreateFoldersToDom().then(FromjFCreateFoldersToDom => {
    StartFuncAddlisteners();
});
