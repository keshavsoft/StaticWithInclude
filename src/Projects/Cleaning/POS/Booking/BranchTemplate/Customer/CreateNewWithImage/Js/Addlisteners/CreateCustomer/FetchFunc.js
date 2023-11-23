import ApiConfigJson from "./../../../../../../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = async ({ inBodyData }) => {

    var formData = new FormData();
    let jVarLocalfileUpload = document.getElementById("inputimageId");

    let jVarLocalFetchUrl = `/${ApiConfigJson.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/MainTable/SaveRow/WithPkTSImage`;


    formData.append("inFolderName", "Masters");
    formData.append("inFileNameOnly", "CRM");
    formData.append("inItemName", "CustomerNames");
    formData.append("CustomerName", inBodyData.CustomerName);
    formData.append("Mobile", inBodyData.Mobile);
    formData.append("City", inBodyData.City);
    formData.append('uploaded_file', jVarLocalfileUpload.files[0]);

    let jVarFromFetch = await fetch(jVarLocalFetchUrl, {
        method: 'POST',
        body: formData
    });

    let data = await jVarFromFetch.json();

    if (data.KTF) {
    };
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
