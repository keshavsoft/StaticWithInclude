import { StartFunc as StartFuncButtonClickFunc } from "./2-ButtonClickFunc.js";

let StartFunc = ({inSubRoute}) => {
    let jVarLocalSaveButtonId = document.getElementById("SaveButtonId");

    jVarLocalSaveButtonId.addEventListener("click", async () => {
        await StartFuncButtonClickFunc({inSubRoute});
    });
};

export { StartFunc };