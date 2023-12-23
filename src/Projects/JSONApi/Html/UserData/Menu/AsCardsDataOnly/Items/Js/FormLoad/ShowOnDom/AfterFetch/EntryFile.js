let StartFunc = ({ inDataToShow }) => {

    let jVarLocalFolderName = getUrlQueryParams({ inGetKey: "FolderName" });
    let jVarLocalFileName = getUrlQueryParams({ inGetKey: "FileName" });
    jFShowFolderInBreadcrumb({ inFolderName: jVarLocalFolderName, inFileNameWithExtension: jVarLocalFileName })

    LocalStartFunc({
        inFilesObjects: inDataToShow.KeysAsArray,
        inFolderName: jVarLocalFolderName,
        inFileNameWithExtension: jVarLocalFileName
    });

};
let LocalStartFunc = ({ inFolderName, inFileNameWithExtension, inFilesObjects }) => {
    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileNameWithExtension = inFileNameWithExtension;
    let jVarLocalFilesObjects = inFilesObjects;
    let jVarLocalKCont1 = document.getElementById("KCont1");
    let jVarLocalNewRow = document.createElement("div");
    jVarLocalNewRow.setAttribute("class", "row");

    jVarLocalFilesObjects.forEach(
        (LoopItem) => {
            let jVarLocalTemplate = document.getElementById("TemplateForItemCard");

            var template = Handlebars.compile(jVarLocalTemplate.innerHTML);

            let jVarLocalFromLoop = template({
                inFolderName: jVarLocalFolderName,
                inFileNameWithExtension: jVarLocalFileNameWithExtension,
                inItemName: LoopItem
            });

            jVarLocalNewRow.insertAdjacentHTML("beforeend", jVarLocalFromLoop);
        }
    );

    jVarLocalKCont1.innerHTML = " ";
    jVarLocalKCont1.appendChild(jVarLocalNewRow);
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

let jFShowFolderInBreadcrumb = ({ inFolderName, inFileNameWithExtension }) => {
    let jVarLocalBreadcrumbFolderNameId = document.getElementById("BreadcrumbFolderNameId");
    jVarLocalBreadcrumbFolderNameId.href = `Files.html?FolderName=${inFolderName}`;
    jVarLocalBreadcrumbFolderNameId.innerHTML = inFolderName;

    let jVarLocalBreadcrumbFileNameId = document.getElementById("BreadcrumbFileNameId");
    jVarLocalBreadcrumbFileNameId.innerHTML = inFileNameWithExtension;
};

export { StartFunc }