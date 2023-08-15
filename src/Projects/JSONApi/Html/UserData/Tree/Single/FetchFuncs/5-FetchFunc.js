import ConfigJson from "../../../../../Config.json" assert {type: 'json'};


let StartFunc = async ({ inBodyData }) => {
    // let jVarLocalBodyData = inBodyData;

    let jVarLocalFetchUrl = `/${ConfigJson.Project}/Api/Data/FromFolder/TreeWitData`;
    
    // let jVarLocalFetchHeaderObject = {
    //     method: "post",
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(jVarLocalBodyData)
    // };

    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };