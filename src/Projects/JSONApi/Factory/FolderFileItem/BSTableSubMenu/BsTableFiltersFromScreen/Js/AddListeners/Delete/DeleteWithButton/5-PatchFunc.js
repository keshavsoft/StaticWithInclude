import ApiConfigJson from '../../../../../../ApiConfig.json' assert {type: 'json'};
import { StartFunc as StartFuncAfterFetchFunc } from "./6-AfterFetchFunc.js";

let StartFunc = async ({ inFetchBody }) => {

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok',
        focusCancel: true,
        focusButtonColor: "#0000ff"
    }).then((result) => {
        if (result.isConfirmed) {
            localFetchFunc({ inFetchBody })
        }
    });

};

const localFetchFunc = async ({ inFetchBody }) => {
    let jFetchUrl = `/${ApiConfigJson.ProjectName}/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/SubKeys/ClientEval`;

    let jLocalFetchConfig = {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inFetchBody)
    };

    let response = await fetch(jFetchUrl, jLocalFetchConfig);

    let jVarLocalResponseData = await response.json();

    StartFuncAfterFetchFunc({ inResponse: jVarLocalResponseData, inBodyData: inFetchBody });

    // return await response.status;

}

export { StartFunc };


// import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
// import ProjectKeys from "../../../../../ConfigKeys/ProjectKeys.json" assert {type: 'json'};

// let StartFunc2 = async ({ inCurrentTarget }) => {
//     let jVarLocalFetchHeaders = StartFuncFetchHeaders({ inCurrentTarget });
//     let jVarLocalFetchUrl = `/${ProjectKeys.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/MainTable/Delete`;
//     let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
//     let data = await response.json();

//     return await data;
// };
