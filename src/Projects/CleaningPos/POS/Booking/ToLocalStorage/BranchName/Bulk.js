import CommonKeys from "../Keys.json" assert { type: "json" };

let StartFunc = ({ inData }) => {
    localStorage.setItem(CommonKeys.BranchName, JSON.stringify(inData));
};

export { StartFunc };