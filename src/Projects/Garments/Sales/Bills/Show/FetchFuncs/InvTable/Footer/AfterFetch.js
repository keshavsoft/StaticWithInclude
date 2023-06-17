let StartFunc = ({ inPostData }) => {
    if (inPostData.KTF) {
        window.location.href = `?RowPK=${localRowPK}&FromSave=true`;
    } else {
        Swal.fire(inPostData.KReason);
    };
};

export { StartFunc };