import { StartFunc as StartFuncFetchFuncsEntry } from "./FetchFuncs/Entry.js";

const StartFunc = () => {
    let jVarLocalCreateFolderButtonId = document.getElementById("ImageShowID");

    jVarLocalCreateFolderButtonId.addEventListener("click", StartFuncFetchFuncsEntry);
};

export { StartFunc };
