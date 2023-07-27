// import { StartFunc as StartFuncFromLocalStorage } from "../../../../../../../../FromLocalStorage/BranchName/Bulk.js";

// import { StartFunc as StartFuncFromLocalStorage } from "../../../FromLocalStorage/BranchName/Bulk.js";

import ConfigJson from "../../../../../Config.json" assert{type: "json"};

const StartFunc = () => {
    // let jVarLocalBranchName = StartFuncFromLocalStorage();

    let jVarLocalBranchName = ConfigJson.BranchName;

    jFLocalBranchNameId({ inBranchNameId: jVarLocalBranchName });
};

let jFLocalBranchNameId = ({ inBranchNameId }) => {
    let jVarLocalHtmlId = 'BranchNameId';
    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    jVarLocalBranchNameId.value = inBranchNameId;
};

export { StartFunc };