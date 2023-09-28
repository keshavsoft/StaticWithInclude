const StartFunc = () => {
    let jVarLocalHtmlId = 'BreadcrumbFolderNameId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    let FolderName = params.get("inFolderName");
    jVarlocalBSTreeId.innerHTML = FolderName;

    jVarlocalBSTreeId.addEventListener("click", (event) => {
        jFLocalToURL({ FolderName, url });

    });
};
let jFLocalToURL = ({ FolderName, url }) => {

    let NewURl = new URL("../Files/Files.html", url);
    const new_url = new URL(`${NewURl.href}?inFolderName=${FolderName}`);
    window.location.href = new_url.href;

};

export { StartFunc };