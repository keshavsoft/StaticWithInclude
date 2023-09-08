let StartFunc = ({ inFromFetch }) => {
    let data = inFromFetch;
    let jVarLocalNewData = {};
    jVarLocalNewData.CustomerNames = data.JsonData;
    if (data) {
        localStorage.setItem("Customers", JSON.stringify(jVarLocalNewData));
    };
};

export { StartFunc };