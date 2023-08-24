import ConfigJson from "../../../../../ApiConfig.json" assert {type: 'json'};

const StartFunc = () => {
    let jVarLocalReturnObject = {};

    jVarLocalReturnObject = ConfigJson.ForFetch;

    return jVarLocalReturnObject;
};

export { StartFunc };