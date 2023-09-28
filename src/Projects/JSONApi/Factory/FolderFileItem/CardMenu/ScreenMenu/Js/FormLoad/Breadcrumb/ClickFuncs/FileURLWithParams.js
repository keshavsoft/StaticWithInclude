const StartFunc = () => {
    let jVarLocalHtmlId = 'BreadcrumbFileNameId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    let FolderName = params.get("inFolderName");
    let FileName = params.get("inFileName");

    jVarlocalBSTreeId.innerHTML = FileName;

    jVarlocalBSTreeId.addEventListener("click", (event) => {
        jFLocalToURL({ FolderName, FileName, url });

    });
};
let jFLocalToURL = ({ FolderName, FileName, url }) => {

    let NewURl = new URL("../Items/Items.html", url);
    const new_url = new URL(`${NewURl.href}?inFolderName=${FolderName}&inFileName=${FileName}`);
    window.location.href = new_url.href;

};

export { StartFunc };