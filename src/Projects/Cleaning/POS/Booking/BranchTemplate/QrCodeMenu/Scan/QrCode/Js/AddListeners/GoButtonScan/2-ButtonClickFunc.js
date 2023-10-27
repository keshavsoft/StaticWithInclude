let StartFunc = async () => {
   
    let QrCodeValue = jFLocalFromDomScanId();

    let jVarLocalArray = QrCodeValue.split("~");
    let QrCodeNumber = jVarLocalArray[0].trim();

    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);

    myUrlWithParams.searchParams.append("Qrcode", QrCodeNumber);

    window.location.href = myUrlWithParams.href;

};

let jFLocalFromDomScanId = () => {
    let jVarLocalHtmlScanId = 'ScanId';
   let jVarHtmlScanId = document.getElementById(jVarLocalHtmlScanId);
   let jVarHtmlScanIdValue = jVarHtmlScanId.value.trim();
   return jVarHtmlScanIdValue;
};

export { StartFunc };