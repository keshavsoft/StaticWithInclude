let StartFunc = ({ inFetchData }) => {
    let jVarLocalDataPk = inFetchData.kPK;

    if (inFetchData.KTF) {
        //   window.location = `../../Link/UploadData.html?FromInsertNew=true&DataPk=${jVarLocalDataPk}`;
        window.location = "/Cleaning/POS/Booking/Index.html";
    } else {
        Swal.fire(
            inFetchData.KReason
        )
    };
};

export { StartFunc };
