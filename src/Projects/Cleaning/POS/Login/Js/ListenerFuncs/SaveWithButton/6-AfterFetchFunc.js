let StartFunc = ({ inFetchData, inUserName }) => {
    if (inFetchData.KTF) {
        //   window.location = `../../Link/UploadData.html?FromInsertNew=true&DataPk=${jVarLocalDataPk}`;
        //  window.location = "/Cleaning/POS/Booking/Index.html";

        // window.location = "/Cleaning/POS/Booking/Kakinada/Dashboard/Dashboard.html";

        window.location = `/Cleaning/POS/Booking/Kakinada/Dashboard/Dashboard.html?UserName=${inUserName}`;

        //http://localhost:4119/Cleaning/POS/Booking/Gurudwara/Dashboard/Dashboard.html
    } else {
        console.log("aaaaaaaa : ", inFetchData);
        if (inFetchData.KTF === false && inFetchData.UserAndDataPkFolderFound && "kPK" in inFetchData) {
            window.location = "/Cleaning/POS/Booking/Kakinada/Dashboard/Dashboard.html";
        };
    };
};

export { StartFunc };
