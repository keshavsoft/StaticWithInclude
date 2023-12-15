let StartFunc = async () => {

    let jVarLocalCustomerNamevalue = jFLocalFromDomCustomerNameId();
    let jVarLocalCustomerCityIdvalue = jFLocalFromDomCityId();
    // let jVarLocalCustomerMobileIdvalue = jFLocalFromDomMobileId();
    let jVarLocalfileUploadvalue = jFLocalFromDominputimageId();

    let formData = new FormData();

    formData.append("inFolderName", "Masters");
    formData.append("inFileNameOnly", "CRM");
    formData.append("inItemName", "Items");
    formData.append("ItemName", jVarLocalCustomerNamevalue);
    // formData.append("Mobile", jVarLocalCustomerMobileIdvalue);
    formData.append("Rate", jVarLocalCustomerCityIdvalue);
    formData.append('uploaded_file', jVarLocalfileUploadvalue);
    //  formData.append('image', jFLocalPrepareBlob());

    formData.append('image', await jFLocalPrepareBlob());

   // jF1();
    return await formData;
};

let jFLocalPrepareBlob = async () => {
    let jVarLocalCustomerImageId = document.getElementById('CustomerImageId');

    let jVarLocalFromFetch = await fetch(jVarLocalCustomerImageId.src);
    let blob = await jVarLocalFromFetch.blob();
    return await blob;
};

let jFLocalPrepareBlob_Failed = () => {

    var ImageURL = CustomerImageId; // 'photo' is your base64 image
    // Split the base64 string in data and contentType
    var block = ImageURL.split(";");
    // Get the content type of the image
    var contentType = block[0].split(":")[1];// In this case "image/gif"
    // get the real base64 content of the file
    var realData = block[1].split(",")[1];

    // Convert it to a blob to upload
    var blob = b64toBlob(realData, contentType);

    return blob;
    // Create a FormData and append the file with "image" as parameter name
    var formDataToUpload = new FormData(form);
    formDataToUpload.append("image", blob);
};

let jFLocalForImage = () => {
    var img = new Image;
    var c = document.createElement("canvas");
    var ctx = c.getContext("2d");

    img.onload = function () {
        c.width = this.naturalWidth;     // update canvas size to match image
        c.height = this.naturalHeight;
        ctx.drawImage(this, 0, 0);       // draw in image
        c.toBlob(function (blob) {        // get content as JPEG blob
            // here the image is a blob
        }, "image/jpeg", 0.75);
    };
    img.crossOrigin = "";              // if from different origin
    img.src = "url-to-image";
};

function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data); // window.atob(b64Data)
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
};

let jFLocalFromDomCustomerNameId = () => {
    let jVarLocalHtmlCustomerNameId = 'CustomerNameId';
    let jVarHtmlCustomerNameId = document.getElementById(jVarLocalHtmlCustomerNameId);
    let jVarHtmlCustomerNameIdValue = jVarHtmlCustomerNameId.value;
    return jVarHtmlCustomerNameIdValue;
};

let jFLocalFromDomCityId = () => {
    let jVarLocalHtmlCityId = 'CityId';
    let jVarHtmlCityId = document.getElementById(jVarLocalHtmlCityId);
    let jVarHtmlCityIdValue = jVarHtmlCityId.value;
    return jVarHtmlCityIdValue;
};

let jFLocalFromDomMobileId = () => {
    let jVarLocalHtmlMobileId = 'MobileId';
    let jVarHtmlMobileId = document.getElementById(jVarLocalHtmlMobileId);
    let jVarHtmlMobileIdValue = jVarHtmlMobileId.value;
    return jVarHtmlMobileIdValue;
};

let jFLocalFromDominputimageId = () => {
    let jVarLocalHtmlinputimageId = 'inputimageId';
    let jVarHtmlinputimageId = document.getElementById(jVarLocalHtmlinputimageId);
    let jVarHtmlinputimageIdValue = jVarHtmlinputimageId.files[0];
    return jVarHtmlinputimageIdValue;
};

export { StartFunc };