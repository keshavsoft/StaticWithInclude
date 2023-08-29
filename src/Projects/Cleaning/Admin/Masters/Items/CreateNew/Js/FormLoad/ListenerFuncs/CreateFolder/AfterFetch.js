let StartFunc = async ({ inResponse }) => {
    if (inResponse.KTF) {
        let jVarLocalToUrl = window.location.pathname;
        const myUrlWithParams = new URL(`${window.location.origin}${jVarLocalToUrl}`);

        myUrlWithParams.searchParams.append("FromSave", true);
        myUrlWithParams.searchParams.append("SavedPk", inResponse.kPK);
        window.location.href = myUrlWithParams.href;
    };
};

export { StartFunc };