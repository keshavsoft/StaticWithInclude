let StartFunc = ({ inDataToShow }) => {

    let jVarLocalFolderName = getUrlQueryParams({ inGetKey: "FolderName" });
    jFShowFolderInBreadcrumb({ inFolderName: jVarLocalFolderName })

    LocalStartFunc({
        inFilesObjects: inDataToShow,
        inFolderName: jVarLocalFolderName
    });

};
let LocalStartFunc = ({ inFolderName, inFilesObjects }) => {
    let jVarLocalFilesObjects = inFilesObjects;
    let jVarLocalKCont1 = document.getElementById("KCont1");
    let jVarLocalNewRow = document.createElement("div");
    jVarLocalNewRow.setAttribute("class", "row");

    Object.entries(jVarLocalFilesObjects).forEach(
        ([key, value]) => {
            let jVarLocalFromLoop = LocalLoopFunc({
                inFolderName: inFolderName,
                inFileName: value.FileName,
                inItemCount: Object.keys(value.Items).length
            });
            jVarLocalNewRow.appendChild(jVarLocalFromLoop);
        });

    jVarLocalKCont1.innerHTML = " ";
    jVarLocalKCont1.appendChild(jVarLocalNewRow);

};

let LocalLoopFunc = ({ inFolderName, inFileName, inItemCount }) => {
    let jVarLocalTemplate = document.getElementById("TemplateForFiles");
    var jVarLocalTemplateClone = jVarLocalTemplate.cloneNode(true);
    jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace(/{{FileName}}/g, inFileName);
    jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace("{{ItemCount}}", inItemCount);
    jVarLocalTemplateClone.innerHTML = jVarLocalTemplateClone.innerHTML.replace("{{FolderName}}", inFolderName);

    return document.importNode(jVarLocalTemplateClone.content, true);
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

let jFShowFolderInBreadcrumb = ({ inFolderName }) => {
    let jVarLocalBreadcrumbFolderNameId = document.getElementById("BreadcrumbFolderNameId");
    jVarLocalBreadcrumbFolderNameId.innerHTML = inFolderName;
};

export { StartFunc }