import ApiConfigJson from "../../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalHtmlId = "BranchNameId";
    let jVarLocalBranchName = document.getElementById(jVarLocalHtmlId);
    jVarLocalBranchName.innerHTML = ApiConfigJson.BranchName;
};

export { StartFunc };