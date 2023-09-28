const StartFunc = () => {
    let jVarLocalHtmlId = 'BreadcrumbItemNameId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    let FolderName = params.get("inFolderName");
    let FileName = params.get("inFileName");
    let ItemName = params.get("inItemName");

    jVarlocalBSTreeId.innerHTML = ItemName;

    jVarlocalBSTreeId.addEventListener("click", () => {
        jFLocalToURL({ FolderName, FileName, ItemName, url });

    });
};
let jFLocalToURL = ({ FolderName, FileName, ItemName, url }) => {

    let NewURl = new URL("../Screens/Screens.html", url);
    const new_url = new URL(`${NewURl.href}?inFolderName=${FolderName}&inFileName=${FileName}&inItemName=${ItemName}`);
    window.location.href = new_url.href;

};

export { StartFunc };