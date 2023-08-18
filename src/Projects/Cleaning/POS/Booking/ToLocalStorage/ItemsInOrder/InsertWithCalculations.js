import CommonKeys from "../Keys.json" assert { type: "json" };

let StartFunc = ({ inData }) => {
    console.log("inData99",inData);
    localStorage.setItem(CommonKeys.ItemsInOrder, JSON.stringify(inData));
};

export { StartFunc };