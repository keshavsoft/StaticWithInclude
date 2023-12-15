
function startup() {
    Webcam.set({
        width: 200,
        height: 200,
        image_format: 'jpeg',
        jpeg_quality: 90
    })
    Webcam.attach("#CamaraId")
};

let jVarLocalCameraShowButtonId = document.getElementById('CameraOpenId');
jVarLocalCameraShowButtonId.addEventListener("click", startup, false);