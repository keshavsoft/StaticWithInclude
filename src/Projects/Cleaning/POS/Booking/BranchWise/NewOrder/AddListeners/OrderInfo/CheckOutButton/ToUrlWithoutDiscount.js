let StartFunc = ({ inBranchName, inOrderNumber }) => {
    let jVarLocalToUrl = "/public/Html/Cleaning/POS/Booking/Tabs/Settlement/Settlement.html";
    const myUrlWithParams = new URL(`${window.location.origin}${jVarLocalToUrl}`);

    myUrlWithParams.searchParams.append("BranchName", inBranchName);
    myUrlWithParams.searchParams.append("OrderNumber", inOrderNumber);

    window.location.href = myUrlWithParams.href;
};

export { StartFunc }