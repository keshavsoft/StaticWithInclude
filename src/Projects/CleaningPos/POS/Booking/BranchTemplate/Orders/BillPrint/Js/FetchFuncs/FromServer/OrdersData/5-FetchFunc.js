import ApiConfigJson from "./../../../../../../../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;

    // let jVarLocalFetchUrl = `/${ApiConfigJson.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsObjectWithPK`;
    let jVarLocalFetchUrl = `/${ApiConfigJson.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/FilterData/ByPk/InputPK`;
    let jVarLocalFetchHeaderObject = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    let jVarLocalResponse = await response.json();
    console.log("jVarLocalResponse---",jVarLocalResponse);

    return jVarLocalResponse;
};

export { StartFunc };