let StartFunc = ({ inFetchData, inDataPk }) => {
    if (inFetchData.KTF) {
        window.location = `../Link/UploadData.html?FromInsertNew=true&DataPk=${inDataPk}`;
    } else {
        Swal.fire(
            inFetchData.KReason
        )
    };
};

export { StartFunc };
