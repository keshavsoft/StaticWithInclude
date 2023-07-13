import CommonKeys from "../Keys.json" assert { type: "json" };

let StartFunc = ({ inData }) => {
    localStorage.setItem(CommonKeys.OrderItemsToShow, JSON.stringify(inData));
};

export { StartFunc };