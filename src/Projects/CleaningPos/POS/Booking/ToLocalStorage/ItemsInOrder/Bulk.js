import CommonKeys from "../Keys.json" assert { type: "json" };

let StartFunc = ({ inData }) => {
    localStorage.setItem(CommonKeys.ItemsInOrder, JSON.stringify(inData));
};

export { StartFunc };