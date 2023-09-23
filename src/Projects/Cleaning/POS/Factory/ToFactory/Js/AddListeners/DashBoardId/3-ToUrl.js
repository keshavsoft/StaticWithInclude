let StartFunc = ({ inBranchName }) => {
    let jVarLocalToUrl = `/Cleaning/POS/Factory/ToFactory/${inBranchName}/BSTable/BSTable.html`;

    const myUrlWithParams = new URL(`${window.location.origin}${jVarLocalToUrl}`);

    window.location.href = myUrlWithParams.href;
};

export { StartFunc };