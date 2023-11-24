let StartFunc = ({ inDataToShow }) => {
    console.log("oooooooooooooooo");

    if (inDataToShow.true) {
        
        const imageBlob = inDataToShow.blob();

        const imageObjectURL = URL.createObjectURL(imageBlob);

        const image = document.getElementById('ShowImageId')
        image.src = imageObjectURL;
        let jVarLocalShowImageModalLabel = document.getElementById("ShowImageModalLabel");
        // jVarLocalShowImageModalLabel.innerHTML = jVarLocalRowPk;
        let jVarLocalShowImageModalDeleteButtonId = document.getElementById("ShowImageModalDeleteButtonId");
        // jVarLocalShowImageModalDeleteButtonId.dataset.rowpk = jVarLocalRowPk;
        //rowpk

        const myModalAlternative = new bootstrap.Modal('#ShowImageModal', {
            keyboard: false
        });
        myModalAlternative.show();
    };

    const myModalAlternative = new bootstrap.Modal('#ShowImageModal', {
        keyboard: false
    });
    myModalAlternative.show();
};


export { StartFunc };