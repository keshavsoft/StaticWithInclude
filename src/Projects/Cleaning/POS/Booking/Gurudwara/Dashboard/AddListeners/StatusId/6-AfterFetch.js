import ApiConfigJson from "./../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = ({ inFromFetch }) => {
    if (inFromFetch.KTF === true) {
        let MaxOrder = Object.keys(inFromFetch.JsonData)[0];
        Swal.fire({
            title: `Max Order Number is: `,
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