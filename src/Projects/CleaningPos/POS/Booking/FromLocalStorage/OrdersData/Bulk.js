import CommonKeys from "../../ToLocalStorage/Keys.json" assert { type: "json" };
// import CommonConfigJson from "../../Config.json" assert { type: "json" };

// import CommonConfigJson from "../../../../Config.json" assert { type: "json" };


const StartFunc = ({ inBranchName }) => {
    // let jVarLocalBranchName = CommonConfigJson.BranchName;

    let jVarLocalBranchName = inBranchName;

    let jVarLocalStorageKey = CommonKeys.OrdersData;
    let jVarLocalDataNeeded = {};

    if (jVarLocalStorageKey in localStorage) {
        let jVarLocalCustomerData = localStorage.getItem(jVarLocalStorageKey);
        let jVarLocalCustomerDataAsJson = JSON.parse(jVarLocalCustomerData);

        jVarLocalDataNeeded = jVarLocalCustomerDataAsJson;
    };

    if (jVarLocalBranchName in jVarLocalDataNeeded) {
        return jVarLocalDataNeeded[jVarLocalBranchName];
    };

    return jVarLocalDataNeeded;
};

export { StartFunc };