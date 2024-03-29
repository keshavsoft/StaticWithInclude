// import ApiConfigJson from "./../../../../../../../ApiConfig.json" assert {type: 'json'};
import ApiConfigJson from "./../../../../../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;

    // let jVarLocalFetchUrl = `/${ApiConfigJson.ProjectName}/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/MainTable/WithSelectedColumns`;

    // let jVarLocalFetchUrl = `/${ApiConfigJson.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsArrayWithPK`;

    let jVarLocalFetchUrl = `/${ApiConfigJson.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/AsObjectWithPK`;
    
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

    return jVarLocalResponse;
};

export { StartFunc };