let StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;
    let inProjectName = jVarLocalBodyData.inProjectName;
    let inRowPk = jVarLocalBodyData.inRowPk;

    let jVarLocalFetchUrl = `/${inProjectName}/API/Data/FromFolder/FromFile/ScreensFromDisplayJson/Items/Custom/PostFromPk/${inRowPk}`;

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
    console.log("jVarLocalResponse:",jVarLocalResponse);

    return jVarLocalResponse;
};

export { StartFunc };