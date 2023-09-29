let StartFunc = async ({ inFetchUrl }) => {
    let jVarLocalFetchUrl = inFetchUrl;

    let LocalResponse = await fetch(jVarLocalFetchUrl);
     jVarGlobalPresentViewData = await LocalResponse.json();

    return await jVarGlobalPresentViewData;
};

export { StartFunc }