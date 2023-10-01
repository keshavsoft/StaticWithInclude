let StartFunc = async ({ inResponse, inBodyData }) => {


    switch (inResponse.KTF) {
        case true:
            window.location.href = "";
            break;

        case false:
            Swal.fire(`Not Update Data ${inResponse.KReason}`)
            break;
        default:
    };
};

export { StartFunc };