import CommonKeys from "./Keys.json" assert { type: "json" };
import ApiConfigJson from "../../../../../../ApiConfig.json" assert {type: 'json'};
import ApiConfigJson from "../../../../../../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = ({ inOrdersData }) => {

    let jVarLocalBranchName = ApiConfigJson.BranchName;
    let jVarLocalStorageKey = CommonKeys.OrdersData;
    let jVarLocalDataFromLocalStorage = localStorage.getItem(jVarLocalStorageKey);

    if (jVarLocalDataFromLocalStorage === null) {
        localStorage.setItem(jVarLocalStorageKey, JSON.stringify({}));
        jVarLocalDataFromLocalStorage = localStorage.getItem(jVarLocalStorageKey);
    };

    let jVarLocalJsonDataFromLocalStorage = JSON.parse(jVarLocalDataFromLocalStorage);

    let jVarLocalDataNeeded = jVarLocalJsonDataFromLocalStorage[jVarLocalBranchName];

    if (jVarLocalDataNeeded === undefined) {
        let jVarLocalOrderJson = Object.assign({}, ...inOrdersData.JsonData.map((x) => ({ [x.pk]: x })));

        jVarLocalJsonDataFromLocalStorage[jVarLocalBranchName] = { ...jVarLocalOrderJson };
    };

    localStorage.setItem(jVarLocalStorageKey, JSON.stringify(jVarLocalJsonDataFromLocalStorage));
};

export { StartFunc };
