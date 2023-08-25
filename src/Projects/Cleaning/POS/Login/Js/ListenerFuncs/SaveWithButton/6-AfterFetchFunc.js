let StartFunc = ({ inFetchData }) => {
    let jVarLocalDataPk = inFetchData.kPK;

    if (inFetchData.KTF) {
        //   window.location = `../../Link/UploadData.html?FromInsertNew=true&DataPk=${jVarLocalDataPk}`;
        window.location = "/Cleaning/POS/Booking/Index.html";
        
       //window.location = "/Cleaning/POS/Booking/Gurudwara/Dashboard/Dashboard.html";
        
       //http://localhost:4119/Cleaning/POS/Booking/Gurudwara/Dashboard/Dashboard.html
    } else {
        Swal.fire(
            inFetchData.KReason
        )
    };
};

export { StartFunc };
