import { StartFunc as StartFuncOldOrder } from "./OldOrder/StartFunc.js";

let StartFunc = async() => {
    await StartFuncOldOrder();
};

export { StartFunc }