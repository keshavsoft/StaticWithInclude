let StartFunc = ({ inFromFetch }) => {
    if (inFromFetch.KTF) {
        let jVarLocalHtmlId = "ScanId";
        let jVarLocalScanId = document.getElementById(jVarLocalHtmlId);
        let jVarLocalScanIdValue = jVarLocalScanId.value;
        console.log("inFromFetch", inFromFetch.JsonData);
        Swal.fire({
            title: `Qr Number ${jVarLocalScanIdValue}`,
            confirmButtonText: 'Ok',
        })
    };
};

export { StartFunc };