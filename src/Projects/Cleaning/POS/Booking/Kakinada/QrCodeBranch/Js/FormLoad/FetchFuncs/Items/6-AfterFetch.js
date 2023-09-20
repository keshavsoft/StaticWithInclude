let StartFunc = ({ inFromFetch }) => {
    let data = inFromFetch;
    if (data) {
        localStorage.setItem("Items", JSON.stringify(data.JsonData));
    };
};

export { StartFunc };