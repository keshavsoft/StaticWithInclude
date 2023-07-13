import CommonKeys from "../Keys.json" assert { type: "json" };

const StartFunc = ({ inKey }) => {
    let jVarLocalLocalStorageKey = CommonKeys.AddOnData;
    let jVarLocalFromLocalStorage = localStorage.getItem(jVarLocalLocalStorageKey);
    let jVarLocalJsonData = JSON.parse(jVarLocalFromLocalStorage);

    var userCleaned = _.pickBy(jVarLocalJsonData, function (value, key) {
        return value.AddOnItemSerial === parseInt(inKey) === false;
    });

    localStorage.setItem(jVarLocalLocalStorageKey, JSON.stringify(userCleaned));

    return false;
};

export { StartFunc };