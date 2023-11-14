let StartFunc = ({ inBranchName }) => {
    let jVarLocalToUrl = `/Cleaning/POS/Booking/${inBranchName}/Dashboard/Dashboard.html`;

    const myUrlWithParams = new URL(`${window.location.origin}${jVarLocalToUrl}`);

    window.location.href = myUrlWithParams.href;
};

export { StartFunc };