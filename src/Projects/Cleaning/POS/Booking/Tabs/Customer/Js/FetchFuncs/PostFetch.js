let StartFunc = async () => {
    let jVarLocalFetchUrl = "http://localhost:4119/JSONApi/Api/Data/FromFolder/FromFile/ScreensFromDisplayJson/MainTable/WithSelectedColumns";

    let jVarLocalBody = {
        inFolderName: "Masters",
        inFileName: "CRM.json",
        inItemName: "Customers",
        inScreenName: "Create"
    };

    let jVarLocalFetchHeaderObject = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBody)
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    let data = await response.json();

    console.log("ssssssssss : ", data);
    return await data;
};

export { StartFunc };