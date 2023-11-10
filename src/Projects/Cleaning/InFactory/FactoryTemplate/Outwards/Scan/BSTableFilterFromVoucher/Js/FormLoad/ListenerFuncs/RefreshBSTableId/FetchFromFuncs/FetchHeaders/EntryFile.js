import KeysJson from './Keys.json' assert {type: 'json'};
import BodyKeysJson from './ForPostKeysAsIs.json' assert {type: 'json'};

let StartFunc = () => {
    
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "VoucherRef"});
    if (jVarLocalFilterString === null) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "VoucherRef not found in URL"
        });
        
    };
    BodyKeysJson.FilterString = `value.VoucherRef === '${jVarLocalFilterString}'`;
    
    KeysJson.body = JSON.stringify(BodyKeysJson);

    return KeysJson;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }