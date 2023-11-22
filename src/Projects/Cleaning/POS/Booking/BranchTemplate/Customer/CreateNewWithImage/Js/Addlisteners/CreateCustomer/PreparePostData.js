import PrepareBodyJson from "./PrepareBody.json" assert {type: 'json'};

let StartFunc = () => {
    let formData = new FormData();

    let jVarLocalfileUpload = document.getElementById("inputimageId");
    formData.append("inFolderName", "QrCodes");
    formData.append("inFileNameOnly", "Generate");
    formData.append("inItemName", "Barcodes");
    formData.append('uploaded_file', jVarLocalfileUpload.files[0]);
    return formData;
};

export { StartFunc };