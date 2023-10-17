import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from './BodyKeys.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalBodyKeysJson = BodyKeysJson;
    let jVarLocalReferncePk = getUrlQueryParams({ inGetKey: "OrderNumber" });
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "Branch" });

    if (jVarLocalReferncePk === null ) {
        Swal.fire({
            title: 'OrderNumber Not Found',
            text: "OrderNumber Not Found in Params",
            icon: 'error',
        });
        return;
    };
    if (jVarLocalBranchName === null ) {
        Swal.fire({
            title: 'Branch Not Found',
            text: "Branch Not Found in Params",
            icon: 'error',
        });
        return;
    };

    jFLocalToInnerHtmlOrderNumberTextId({ inOrderNumberTextId: jVarLocalReferncePk });
    jFLocalToInnerHtmlBranchNameTextId({ inBranchNameTextId: jVarLocalBranchName })
    // jVarLocalBodyKeysJson.FilterString=`value.GenerateReference.ReferncePk === '${jVarLocalReferncePk}'`;
    jVarLocalBodyKeysJson.FilterString = jVarLocalBodyKeysJson.FilterString.replace("{{OrderNumber}}", jVarLocalReferncePk);
    jVarLocalBodyKeysJson.FilterString = jVarLocalBodyKeysJson.FilterString.replace("{{Branch}}", jVarLocalBranchName);

    KeysJson.body = JSON.stringify(jVarLocalBodyKeysJson);

    return KeysJson;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

let jFLocalToInnerHtmlOrderNumberTextId = ({ inOrderNumberTextId }) => {
    let jVarLocalHtmlId = 'OrderNumberTextId';
    let jVarLocalOrderNumberTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderNumberTextId.innerHTML = inOrderNumberTextId;
};

let jFLocalToInnerHtmlBranchNameTextId = ({ inBranchNameTextId }) => {
    let jVarLocalHtmlId = 'BranchNameTextId';
    let jVarLocalBranchNameTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalBranchNameTextId.innerHTML = inBranchNameTextId;
};

export { StartFunc }