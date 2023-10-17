import CommonKeys from "../Keys.json" assert { type: "json" };

let StartFunc = ({ inData }) => {
    let jVarLocalCheck = localStorage.getItem(CommonKeys.OrdersData);
    let jVarLocalOrdersDataParsed = JSON.parse(jVarLocalCheck);

    if (jVarLocalOrdersDataParsed === null || Object.keys(jVarLocalOrdersDataParsed).length === 0) {
        localStorage.setItem(CommonKeys.OrdersData, JSON.stringify(inData));
    };
};

export { StartFunc };