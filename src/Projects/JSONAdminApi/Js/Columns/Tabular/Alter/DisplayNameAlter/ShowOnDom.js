import { jFStartFunc as DataAttributesjFStartFunc } from "./ApplyClasses.js";

let jFCreateFoldersToDom = async () => {
    let jVarLocalRoute = window.location.pathname.split("/")[1];
    let jVarLocalFetchUrl = `/${jVarLocalRoute}/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/DisplayNameAlter`;
    let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
    let dataFromApi = await jVarLocalFromFetch.json();

    if (dataFromApi !== null) {
        DataAttributesjFStartFunc({ inDataFromApi: dataFromApi });

        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
        document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(dataFromApi);
    };

    return await dataFromApi;
};

export { jFCreateFoldersToDom }