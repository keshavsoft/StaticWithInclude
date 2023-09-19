import { StartFunc as StartFuncAddlisteners } from "./Addlisteners.js";

const StartFunc = ({inProjectName}) => {
    let jVarLocalFolderCreated = getUrlQueryParams({ inGetKey: "NewFolderName" });

    let jVarLocalHtmlId = "KCont1";
    let jVarLocalKCont1 = document.getElementById(jVarLocalHtmlId);
    let jVarLocalFindRow = jVarLocalKCont1.querySelector(`tr[data-foldername='${jVarLocalFolderCreated}']`);

    if (jVarLocalFindRow === null === false) {
        jVarLocalFindRow.classList.add("table-success");
    };

    StartFuncAddlisteners({inProjectName});
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
