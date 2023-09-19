let StartFunc = ({ inOrderNumber }) => {
    let myUrlWithParams = new URL("../../SettlementWithDiscount/SettlementWithDiscount.html", window.location.href);

    myUrlWithParams.searchParams.append("OrderNumber", inOrderNumber);

    window.location.href = myUrlWithParams;
};

export { StartFunc }