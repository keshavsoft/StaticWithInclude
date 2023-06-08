let StartFunc = ({ inDataFromApi }) => {
    localFuncForAlert({ inDataFromApi });
};


let localFuncForAlert = ({ inDataFromApi }) => {

    if (Object.keys(inDataFromApi.Folders).length > 0) {
        const bsAlert = new bootstrap.Alert('#noFolderAlertID');
        bsAlert.close()

    } else {
        const bsAlert = new bootstrap.Alert('#noFolderAlertID');
    };
};

export { StartFunc }