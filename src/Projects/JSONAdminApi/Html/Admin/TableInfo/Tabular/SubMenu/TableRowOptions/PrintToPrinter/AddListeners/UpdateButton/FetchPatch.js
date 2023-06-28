let StartFunc = async ({ inFetchBody }) => {
    let jFetchUrl = "/JSONAdminApi/AdminApi/AsTree/Json/UserFolders/ScreensFromDisplayJson/TableInfo/SubMenu/TableRowOptions/PrintToPrinter";

    let FetchBody = {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inFetchBody)
    }

    let response = await fetch(jFetchUrl, FetchBody);

    return response;
};

export { StartFunc };