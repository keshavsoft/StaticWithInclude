import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalSaveButtonId = document.getElementById("SaveButtonId");

    jVarLocalSaveButtonId.addEventListener("click", async () => {
        await StartFuncButtonClickFunc();
    });
};

export { StartFunc };