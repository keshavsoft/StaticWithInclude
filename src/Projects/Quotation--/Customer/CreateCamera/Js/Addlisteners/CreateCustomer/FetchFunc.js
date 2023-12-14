import ApiConfigJson from "./../../../../../../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = async ({ inBodyData }) => {

     let jVarLocalFetchUrl = `/${ApiConfigJson.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/MainTable/SaveRow/WithPkTSImage`;

    //let jVarLocalFetchUrl = `/${ApiConfigJson.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/MainTable/SaveRow/WithPkTimeStamp`;
    console.log("inBodyData :", inBodyData);
    let jVarFromFetch = await fetch(jVarLocalFetchUrl, {
        method: 'POST',
        body: inBodyData
    });

    let data = await jVarFromFetch.json();

    return await data;
};


























// let StartFunc = async ({ inBodyData }) => {
//     let jVarLocalBodyData = inBodyData;

//     let jVarLocalFetchUrl = `/${ApiConfigJson.ProjectName}/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/Vertical/HtmlCreate/Save`;

//     let jVarLocalFetchHeaderObject = {
//         method: "post",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(jVarLocalBodyData)
//     };

//     let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
//     let jVarLocalResponse = await response.json();

//     return jVarLocalResponse;
// };

export { StartFunc };
