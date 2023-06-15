import { StartFunc as StartFuncFetchUrl } from "./FetchFunc.js";

let StartFunc = async ({ inProjectName }) => {
    let dataFromApi;

    let jVarLocalRoute = inProjectName;
    let jVarLocalFetchUrl = `/${jVarLocalRoute}/AdminApi/AsTree/Json/UserFolders/AdminFolder/PreloadJsonFile/FromKeys/ConfigKey/DataListInfoKey`;
    let localJsonData = await StartFuncFetchUrl({ FetchUrl: jVarLocalFetchUrl });

    if (localJsonData !== null) {

        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForPreload").innerHTML;
        document.getElementById("KtBody").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(localJsonData);
    };

    return await dataFromApi;
};

export { StartFunc };