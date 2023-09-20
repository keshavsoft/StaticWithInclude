import ApiConfigJson from "./../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = ({ inFromFetch }) => {
    if (inFromFetch.KTF === true) {
        let MaxOrder = inFromFetch.JsonData;
        Swal.fire({
            title: `Total Qr Codes is: `,
            text: `${MaxOrder}`
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: `${ApiConfigJson.ForFetch.FileNameOnly} not found`,
            text: `Json File name : ${ApiConfigJson.ForFetch.FileNameOnly} not found in Data Folder : ${ApiConfigJson.ForFetch.FolderName}`
        })
    };
};

export { StartFunc };