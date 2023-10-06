import { StartFunc as StartFuncAddlisteners } from "./Addlisteners.js";

const StartFunc = () => {
    // let jVarLocalFolderCreated = getUrlQueryParams({ inGetKey: "NewFolderName" });
    let jVarLocalFromSave = getUrlQueryParams({ inGetKey: "FromSave" });
    let jVarLocalSavedPk = getUrlQueryParams({ inGetKey: "SavedPk" });

    if (jVarLocalFromSave) {
        if (jVarLocalSavedPk === null === false) {
            let jVarLocalAlertCreateIdHtmlId = 'AlertCreateId';
            let jVarLocalAlertCreateId = document.getElementById(jVarLocalAlertCreateIdHtmlId);
            jVarLocalAlertCreateId.style.display = "";

            let jVarLocalStrong = jVarLocalAlertCreateId.querySelector("strong");
            jVarLocalStrong.innerHTML = jVarLocalSavedPk;
        }

        StartFuncAddlisteners();
    };
};
    let getUrlQueryParams = ({ inGetKey }) => {
        const queryString = window.location.search;
        const parameters = new URLSearchParams(queryString);
        const value = parameters.get(inGetKey);
        return value;
    };

    export { StartFunc };
