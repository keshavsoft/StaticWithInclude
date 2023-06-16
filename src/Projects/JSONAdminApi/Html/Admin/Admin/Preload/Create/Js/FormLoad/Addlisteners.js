import { StartFunc as StartFuncCreateKeyButton } from "./ListenerFuncs/CreateKeyButton.js";

let StartFunc = ({ inProjectName }) => {
    let jVarLocalCreateFolderButtonId = document.getElementById("CreateKeyButtonId");

    jVarLocalCreateFolderButtonId.addEventListener("click", async () => {
        await StartFuncCreateKeyButton({
            inEvent: event,
            inProjectName
        });
    });
};

export { StartFunc };