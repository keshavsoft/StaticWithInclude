let StartFunc = ({ inFromFetch }) => {
    if (inFromFetch.KTF) {
        jFLocalPostFetchNotArray();
    };
};

let jFLocalPostFetchNotArray = () => {
    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);
    myUrlWithParams.searchParams.append("FromSave", true);

    window.location.href = myUrlWithParams.href;
};

export { StartFunc };