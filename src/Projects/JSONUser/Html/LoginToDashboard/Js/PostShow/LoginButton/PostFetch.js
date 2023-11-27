let StartFunc = ({ inFromFetch }) => {
    if ("RedirectPage" in inFromFetch) {
        window.open(inFromFetch.RedirectPage, '_newtab');
        return ;
    };

    window.open("/JSONApi/Html/UserData/Menu/AsCards/Files.html", '_newtab');
};

export { StartFunc }
