import CommonKeys from "../Keys.json" assert { type: "json" };

let StartFunc = ({ inData }) => {
    localStorage.setItem(CommonKeys.CheckOutData, JSON.stringify(inData));
};

export { StartFunc };