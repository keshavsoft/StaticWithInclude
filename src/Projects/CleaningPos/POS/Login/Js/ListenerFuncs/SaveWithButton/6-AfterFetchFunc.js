let StartFunc = ({ inFetchData, inUserName }) => {
    localStorage.setItem("kUserName", inUserName);

    if (inFetchData.KTF) {

        window.location = `/Cleaning/POS/Booking/Kakinada/Dashboard/Dashboard.html?UserName=${inUserName}&FromCreate=true`;

    } else {
        if (inFetchData.KTF === false && inFetchData.UserAndDataPkFolderFound && "kPK" in inFetchData) {
            window.location = "/Cleaning/POS/Booking/Kakinada/Dashboard/Dashboard.html";
        };
    };
};

export { StartFunc };
