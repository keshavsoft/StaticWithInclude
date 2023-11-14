let StartFunc = ({ inBranchName }) => {
    let jVarLocalToUrl = `./${inBranchName}/Dashboard/Dashboard.html`;

    window.location.href = jVarLocalToUrl;
};

export { StartFunc };