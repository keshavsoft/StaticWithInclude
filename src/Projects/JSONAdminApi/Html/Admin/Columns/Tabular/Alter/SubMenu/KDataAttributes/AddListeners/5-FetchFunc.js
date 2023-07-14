let StartFunc = async ({ inBodyData }) => {

    let jVarLocalBodyData = inBodyData;
    
    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableColumns/SubKeys/KDataAttributes";
    let localFetchBody = {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    }

    let response = await fetch(jFetchUrl, localFetchBody);

    let jVarLocalResponse = await response.json();

    return jVarLocalResponse; 
};

export { StartFunc };