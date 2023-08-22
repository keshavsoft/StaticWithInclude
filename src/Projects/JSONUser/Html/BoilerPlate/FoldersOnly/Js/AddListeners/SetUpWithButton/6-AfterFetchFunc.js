let StartFunc = ({ inFetchData, inFetchBody }) => {
    let LocalDataPK = inFetchBody.DataPK;

    if (inFetchData.KTF) {

        var myUrlWithParams = new URL(window.location);
        myUrlWithParams.searchParams.append("isSetup", true);
        myUrlWithParams.searchParams.append("DataPk", LocalDataPK);
        window.location.href = myUrlWithParams.href;
    };
};

export { StartFunc };
