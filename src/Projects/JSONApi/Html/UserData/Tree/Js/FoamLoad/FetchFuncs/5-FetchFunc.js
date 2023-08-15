import ConfigJson from "../../../../../../Config.json" assert {type: 'json'};


let StartFunc = async () => {

    let jVarLocalFetchUrl = `/${ConfigJson.Project}/Api/Data/FromFolder/TreeWitData`;
    
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();
    console.log("jVarLocalResponse:",jVarLocalResponse);

    return jVarLocalResponse;
};

export { StartFunc };