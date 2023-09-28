const StartFunc = () => {
    let jVarLocalHtmlId = 'BreadcrumbScreenNameId';
    let jVarlocalBSTreeId = document.getElementById(jVarLocalHtmlId);

    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    let ScreenName = params.get("inScreenName");
    jVarlocalBSTreeId.innerHTML = ScreenName;

};

export { StartFunc };