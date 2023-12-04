let StartFunc = ({ inBranchName }) => {
    let jVarLocalToUrl = `./BranchTemplate/Dashboard/Dashboard.html?BranchName=${inBranchName}`;

    window.location.href = jVarLocalToUrl;
};

export { StartFunc };