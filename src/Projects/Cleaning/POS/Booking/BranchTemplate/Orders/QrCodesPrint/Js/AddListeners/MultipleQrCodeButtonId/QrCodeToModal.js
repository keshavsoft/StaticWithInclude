let jFLocalPullHtmlForSingleColumn = async () => {
    let jVarLocalFetchUrl = "./ForHbs/QrCodeModalPopUp.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();

    return await data;
};

let StartFunc = async ({ inData }) => {
    let jVarLocalDataNeeded = inData;
    try {
        if (jVarLocalDataNeeded) {
            let jVarLocalModalBody = document.getElementById("ModalBody");

            let jVarLocalFromTemplate = await jFLocalPullHtmlForSingleColumn();

            var template = Handlebars.compile(jVarLocalFromTemplate);
            let LocalQrCodesData = jVarLocalDataNeeded;

            jVarLocalModalBody.innerHTML = template(LocalQrCodesData);

            Object.entries(LocalQrCodesData).forEach(
                ([key, value]) => {
                    let jVarLocalQrDataKey = key;
                    let jVarLocalQrData = value;

                    let jVarLocalHtmlQrId = document.getElementById(`CanvasId-${jVarLocalQrDataKey}`);

                    GenerateQrCodeOnModal({
                        QrDataKey: jVarLocalQrDataKey,
                        inQrData: jVarLocalQrData,
                        inCanvasId: jVarLocalHtmlQrId
                    });
                }
            );

            let jVarLocalId = "ModalForQrCode";

            var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

            myModal.show();
        };
    } catch (error) {
        console.log("error -------: ", error);
    };
};

let GenerateQrCodeOnModal = ({ QrDataKey, inQrData = "", inCanvasId }) => {
    var canvas = inCanvasId;
    canvas.height = 1;
    canvas.width = 1;
    canvas.style.visibility = 'hidden';

    // Convert the options to an object.
    let opts = {};
    // opts.text1 = `${inQrData.pk}
    // ${inQrData.GenerateReference.FileNameOnly}-${inQrData.location}
    // ${inQrData.pk}-${inQrData.GenerateReference.ReferncePk}
    // ${inQrData.ItemName}
    // ${inQrData.WashType}@${inQrData.ItemSerial}/${inQrData.Pcs}/${inQrData.TotalQrCodes}
    // ${inQrData.AddOnDataAsString}
    // ${inQrData.BookingData.OrderData.Currentdateandtime}
    // ${inQrData.DeliveryDateTime}`;
    // Finish up the options GenerateReference
    opts.text = `${inQrData.pk}~`
    opts.text += `${inQrData.GenerateReference.FileNameOnly}-${inQrData.location}~`
    opts.text += `${inQrData.pk}-${inQrData.GenerateReference.ReferncePk}~`
    opts.text += `${inQrData.ItemName}~`
    opts.text += `${inQrData.WashType}@${inQrData.ItemSerial}/${inQrData.Pcs}/${inQrData.TotalQrCodes}~`
    opts.text += `${inQrData.AddOnDataAsString}~`
    opts.text += `${inQrData.BookingData.OrderData.Currentdateandtime}~`
    opts.text += `${inQrData.DeliveryDateTime}`;
    // opts.text = "100";
    opts.bcid = "qrcode";
    opts.scaleX = 1;
    opts.scaleY = 1;
    opts.rotate = "N";

    // Draw the bar code to the canvas
    try {
        let ts0 = new Date;
        bwipjs.toCanvas(canvas, opts);
        show(ts0, new Date);
    } catch (e) {
        console.log("error : ", e);

        return;
    }

    function show(ts0, ts1) {
        canvas.style.visibility = 'visible';
    }
};

export { StartFunc };