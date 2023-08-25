let StartFunc = () => {
    return {
       "BranchName": jFLocalBranchName(),
       "Currentdateandtime": jFLocalShowDate()
    };
};

let jFLocalShowDate = () => {
    let jVarLocalHtmlId = "Currentdateandtime";

    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    return jVarLocalBranchNameId.value;
};

const jFLocalBranchName = () => {
    let jVarLocalHtmlId = "BranchNameId";
    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    return jVarLocalBranchNameId.value;
};

let jFLocalShowCustomerMobile = () => {
    let jVarLocalHtmlId = "OrderInfoCustomerMobileId";

    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    return jVarLocalBranchNameId.value;
};

let jFLocalShowCustomerName = () => {
    let jVarLocalHtmlId = "OrderInfoCustomerNameId";

    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    return jVarLocalBranchNameId.value;
};


export { StartFunc }