let StartFunc = async ({ FetchUrl }) => {

    let localFetchUrl = FetchUrl;
    let jVarLocalFromFetch = await fetch(localFetchUrl);
    let dataFromApi = await jVarLocalFromFetch.json();
    let localJsonData = dataFromApi.JsonData;

    return await localJsonData;
};

export { StartFunc };