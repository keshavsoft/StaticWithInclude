let StartFunc = ({ inProjectName }) => {
    let jVarLocalShowButtonClass = document.getElementsByClassName("ShowButtonClass");

    for (let i = 0; i < jVarLocalShowButtonClass.length; i++) {
        jVarLocalShowButtonClass[i].addEventListener("click", async (event) => {
            await jFLocalButtonClickFunc({
                inEvent: event,
                inProjectName
            });
        });
    };
};

let jFLocalButtonClickFunc = async ({ inEvent, inProjectName }) => {
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfileName = jVarLocalCurrentTarget.dataset.filename;

    let jVarLocalNewLocation = "";
    jVarLocalNewLocation += `/${inProjectName}/Html/Admin/CreateNew/CreateItem.html?inFolderName=${jVarLocalFolderName}&inFileName=${jVarLocalfileName}`
    window.location = jVarLocalNewLocation;
};

export { StartFunc };
