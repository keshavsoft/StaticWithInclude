let StartFunc = ({ inFetchData, inUserName }) => {
    localStorage.setItem("kUserName", inUserName);

    if ("UserNameFound" in inFetchData) {

        if (inFetchData.UserNameFound) {
            //     window.location = `/Cleaning/POS/Booking/BranchTemplate/Dashboard/Dashboard.html?BranchName=Kakinada`;
        };
        //        "http://localhost:4119/Cleaning/POS/Booking/BranchTemplate/Dashboard/Dashboard.html#"
    };

    if ("UserAndDataPkFolderFound" in inFetchData) {
        if (inFetchData.UserAndDataPkFolderFound) {
            if ("RedirectPage" in inFetchData) {
                window.location = inFetchData.RedirectPage;
            };
        };
    };

    if (inFetchData.KTF) {
        if ("RedirectPage" in inFetchData) {
            window.location = inFetchData.RedirectPage;
        };
        //     window.location = `/Cleaning/POS/Booking/Kakinada/Dashboard/Dashboard.html?UserName=${inUserName}&FromCreate=true`;

    } else {
        if (inFetchData.KTF === false && inFetchData.UserAndDataPkFolderFound && "kPK" in inFetchData) {
            //       window.location = "/Cleaning/POS/Booking/Kakinada/Dashboard/Dashboard.html";
        };
    };
};

export { StartFunc };
