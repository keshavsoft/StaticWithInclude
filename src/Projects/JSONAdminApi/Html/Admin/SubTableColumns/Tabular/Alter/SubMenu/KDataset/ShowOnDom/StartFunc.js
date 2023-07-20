import { jFStartFunc as StartFuncApplyClasses } from "./ApplyClasses.js";

let StartFunc = async ({ inProjectName }) => {
  let jVarLocalRoute = inProjectName;
  let jVarLocalFetchUrl = `/${jVarLocalRoute}/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableColumns/SubKeys/KDataset`;

  let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
  let dataFromApi = await jVarLocalFromFetch.json();

  if (dataFromApi !== null) {
    StartFuncApplyClasses({ inDataFromApi: dataFromApi });

    let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
    document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(dataFromApi);
  };

  return await dataFromApi;
};

export { StartFunc }