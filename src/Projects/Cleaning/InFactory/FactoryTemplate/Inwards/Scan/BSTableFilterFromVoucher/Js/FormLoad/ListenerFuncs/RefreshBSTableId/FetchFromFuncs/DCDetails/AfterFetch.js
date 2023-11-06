let StartFunc = ({ inDataToShow }) => {
    let jVarLocalData = Object.values(inDataToShow)[0];
    
    jFLocalToInnerHtmlpkTextId({ inpkTextId: jVarLocalData.pk });
    jFLocalToInnerHtmlVoucherNumberTextId({ inVoucherNumberTextId: jVarLocalData.VoucherNumber })
    jFLocalToInnerHtmlDescriptionTextId({ inDescriptionTextId: jVarLocalData.Description });
    jFLocalToInnerHtmlDateTextId({ inDateTextId: jVarLocalData.Date });
    jFLocalToInnerHtmlFactoryTextId({ inFactoryTextId: jVarLocalData.Factory });
    jFLocalToInnerHtmlBranchNameTextId({ inBranchNameTextId: jVarLocalData.BranchName });
};

let jFLocalToInnerHtmlpkTextId = ({ inpkTextId }) => {
    let jVarLocalHtmlId = 'pkTextId';
    let jVarLocalpkTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalpkTextId.innerHTML = inpkTextId;
};

let jFLocalToInnerHtmlVoucherNumberTextId = ({ inVoucherNumberTextId }) => {
    let jVarLocalHtmlId = 'VoucherNumberTextId';
    let jVarLocalVoucherNumberTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalVoucherNumberTextId.innerHTML = inVoucherNumberTextId;
};

let jFLocalToInnerHtmlDescriptionTextId = ({ inDescriptionTextId }) => {
    let jVarLocalHtmlId = 'DescriptionTextId';
    let jVarLocalDescriptionTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDescriptionTextId.innerHTML = inDescriptionTextId;
};

let jFLocalToInnerHtmlDateTextId = ({ inDateTextId }) => {
    let jVarLocalHtmlId = 'DateTextId';
    let jVarLocalDateTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDateTextId.innerHTML = inDateTextId;
};

let jFLocalToInnerHtmlFactoryTextId = ({ inFactoryTextId }) => {
    let jVarLocalHtmlId = 'DCFactoryTextId';
    let jVarLocalFactoryTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalFactoryTextId.innerHTML = inFactoryTextId;
};

let jFLocalToInnerHtmlBranchNameTextId = ({ inBranchNameTextId }) => {
    let jVarLocalHtmlId = 'BranchNameTextId';
    let jVarLocalBranchNameTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalBranchNameTextId.innerHTML = inBranchNameTextId;
};

export { StartFunc };