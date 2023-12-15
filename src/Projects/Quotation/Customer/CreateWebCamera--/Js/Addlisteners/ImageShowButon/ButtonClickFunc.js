let StartFunc1 = () => {
    let jVarLocalinputimageId = document.getElementById("inputimageId");
    let jVarLocalinputimageValue = jVarLocalinputimageId.files[0];
    let jVarLocalCustomerImageIdId = document.getElementById("CustomerImageId");
    jVarLocalCustomerImageIdId.src = URL.createObjectURL(jVarLocalinputimageValue);


};

let StartFunc = () => {
Webcam.snap(function(data_url){
    console.log("data_url:",data_url);
    let jVarLocalCustomerImageIdId = document.getElementById("CustomerImageId");
    // jVarLocalCustomerImageIdId.src = URL.createObjectURL(data_url);
    console.log("jVarLocalCustomerImageIdId.src:",jVarLocalCustomerImageIdId.src);
    jVarLocalCustomerImageIdId.src = data_url;


})

    // let jVarLocalinputimageId = document.getElementById("inputimageId");
    // let jVarLocalinputimageValue = jVarLocalinputimageId.files[0];
    // let jVarLocalCustomerImageIdId = document.getElementById("CustomerImageId");
    // jVarLocalCustomerImageIdId.src = URL.createObjectURL(jVarLocalinputimageValue);


};


export { StartFunc };