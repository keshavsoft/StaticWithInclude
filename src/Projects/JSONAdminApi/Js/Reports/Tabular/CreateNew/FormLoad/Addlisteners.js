import { StartFunc as StartFuncCreateButton } from "./ListenerFuncs/CreateButton.js";

let StartFunc = ({ inProjectName }) => {
    let jVarLocalCreateFolderButtonId = document.getElementById("CreateReportButtonId");

    jVarLocalCreateFolderButtonId.addEventListener("click", async () => {
        await StartFuncCreateButton({
            inEvent: event,
            inProjectName
        });
    });
};

export { StartFunc };