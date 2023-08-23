import ApiConfigJson from "../../../../../ApiConfig.json" assert {type: 'json'};

// import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

let StartFunc = async ({ inBodyData }) => {

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
            localFetchFunc({ inBodyData })
        }
    });

};

let localFetchFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;
    let jVarLocalFetchUrl = `/${ApiConfigJson.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/FilterData/ByColumn/IsEqual`;
    let jVarLocalFetchHeaderObject = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    let jVarLocalResponse = await response.json();

    // StartFuncAfterFetch({ inFromFetch: jVarLocalResponse });

    return await jVarLocalResponse;
};

// const localFetchFunc = async ({ inBodyData }) => {
//     let jVarLocalBodyData = inBodyData;
//     let jVarLocalFetchUrl = `/${ApiConfigJson.ProjectName}/Api/Data/FromFolder/FromFile/Items/FromDataFolder/FilterData/ByColumn/IsEqual`;
//     let response = await fetch(jVarLocalFetchUrl,);
//     let jVarLocalResponse = await response.json();
//     console.log("jVarLocalResponse---:", jVarLocalResponse);
// StartFuncAfterFetch({ inFromFetch: jVarLocalResponse });

//     return jVarLocalResponse;

// };


export { StartFunc };
