import { StartFunc as StartFuncCreateFolderButton } from "./ListenerFuncs/CreateFolderButton.js";

let StartFunc = ({ inProjectName }) => {
    let jVarLocalCreateFolderButtonId = document.getElementById("CreateFolderButtonId");

    jVarLocalCreateFolderButtonId.addEventListener("click", async () => {
        await StartFuncCreateFolderButton({
            inEvent: event,
            inProjectName
        });
    });
};

export { StartFunc };