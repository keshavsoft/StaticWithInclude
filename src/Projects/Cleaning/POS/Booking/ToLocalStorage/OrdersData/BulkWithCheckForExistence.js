import CommonKeys from "../Keys.json" assert { type: "json" };

let StartFunc = ({ inData }) => {
    let jVarLocalCheck = localStorage.getItem(CommonKeys.OrdersData);

    if (jVarLocalCheck === null) {
        localStorage.setItem(CommonKeys.OrdersData, JSON.stringify(inData));
    };
};

export { StartFunc };