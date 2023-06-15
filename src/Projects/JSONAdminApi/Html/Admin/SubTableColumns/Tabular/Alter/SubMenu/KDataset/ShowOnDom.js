// import { jFStartFunc as ApplyClassesjFStartFunc } from "../../../../CommonApplyClasses/ApplyClasses.js";

let jFCreateFoldersToDom = async ({ inProjectName }) => {
  let jVarLocalRoute = inProjectName;
  let jVarLocalFetchUrl = `/${jVarLocalRoute}/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/SubTableColumns/SubKeys/KDataset`;

  let jVarLocalFromFetch = await fetch(jVarLocalFetchUrl);
  let dataFromApi = await jVarLocalFromFetch.json();
  console.log("dataFromApi----------", dataFromApi);

  if (dataFromApi !== null) {
    //  ApplyClassesjFStartFunc({ inDataFromApi: dataFromApi });

    let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
    document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(dataFromApi);
  };

  return await dataFromApi;
};

export { jFCreateFoldersToDom }