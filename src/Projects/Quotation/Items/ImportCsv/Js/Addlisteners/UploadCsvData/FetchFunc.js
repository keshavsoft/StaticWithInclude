import ApiConfigJson from "./../../ApiConfig.json" assert {type: 'json'};

let StartFunc = async ({ inBodyData }) => {
    //  let jVarLocalFetchUrl = `/${ApiConfigJson.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/MainTable/SaveRow/AsIsWithTimeStamp`;
    let jVarLocalFetchUrl = `/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/DataFolder/FileinFolder/ItemName/CreateNew/CreateItemWithData`;
    let jVarFromFetch = await fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inBodyData)
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
