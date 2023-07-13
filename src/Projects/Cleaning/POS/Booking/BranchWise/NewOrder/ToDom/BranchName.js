import { StartFunc as StartFuncFromLocalStorage } from "../../../../../../../../FromLocalStorage/BranchName/Bulk.js";

const StartFunc = () => {
    let jVarLocalBranchName = StartFuncFromLocalStorage();
    jFLocalBranchNameId({ inBranchNameId: jVarLocalBranchName });
};

let jFLocalBranchNameId = ({ inBranchNameId }) => {
    let jVarLocalHtmlId = 'BranchNameId';
    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    jVarLocalBranchNameId.value = inBranchNameId;
};

export { StartFunc };