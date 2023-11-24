import { StartFunc as StartFuncFetchFuncsEntry } from "./FetchFuncs/Entry.js";

const StartFunc = () => {
    let jVarLocalCreateFolderButtonId = document.getElementsByClassName("ImageShowClassName");
    console.log("jVarLocalCreateFolderButtonId:",jVarLocalCreateFolderButtonId);

    for (let i = 0; i < jVarLocalCreateFolderButtonId.length; i++) {
        jVarLocalCreateFolderButtonId[i].addEventListener("click", (event) => {
            StartFuncFetchFuncsEntry({ inEvent: event })
        });

    };
};

export { StartFunc };
