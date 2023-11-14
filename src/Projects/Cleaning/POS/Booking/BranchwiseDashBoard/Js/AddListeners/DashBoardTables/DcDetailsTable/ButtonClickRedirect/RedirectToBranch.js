let StartFunc = ({ inevent }) => {

    let jVarLocalCurrentTarget = inevent.currentTarget;
    let jVarLocalbranch = jVarLocalCurrentTarget.dataset.branch;

    jFLocalToURL({ BranchName: jVarLocalbranch })
};

let jFLocalToURL = ({ BranchName }) => {

    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL(`./${BranchName}/ToFactoryFromParam/DC/ShowAll/ShowAll.html`, url);
    // const new_url = new URL(${NewURl.href}?${params1});
    window.location.href = NewURl;
};

export { StartFunc };