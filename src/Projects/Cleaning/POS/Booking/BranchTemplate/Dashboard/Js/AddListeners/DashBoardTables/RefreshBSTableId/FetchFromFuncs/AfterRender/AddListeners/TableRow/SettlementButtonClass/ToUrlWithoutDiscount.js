let StartFunc = ({ inOrderNumber }) => {
    let myUrlWithParams = new URL("../Settlement/Settlement.html", window.location.href);

    myUrlWithParams.searchParams.append("OrderNumber", inOrderNumber);

    window.location.href = myUrlWithParams;
};

export { StartFunc };