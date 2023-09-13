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

let jFLocalButtonClickFunc = async ({ inEvent }) => {
    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname.replace("CreateScreen.html", "CreateColumn.html")}`);

    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalFolderName = jVarLocalCurrentTarget.dataset.foldername;
    let jVarLocalfileName = jVarLocalCurrentTarget.dataset.filename;
    let jVarLocalItemName = jVarLocalCurrentTarget.dataset.itemname;
    let jVarLocalscreenname = jVarLocalCurrentTarget.dataset.screenname;

    myUrlWithParams.searchParams.append("inFolderName", jVarLocalFolderName);
    myUrlWithParams.searchParams.append("inFileName", jVarLocalfileName);
    myUrlWithParams.searchParams.append("inItemName", jVarLocalItemName);
    myUrlWithParams.searchParams.append("inScreenName", jVarLocalscreenname);

    window.location = myUrlWithParams.href;
};

export { StartFunc };
