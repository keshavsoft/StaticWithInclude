import ApiConfigJson from "../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = ({ inQrCode }) => {
    let inBranchName = ApiConfigJson.BranchName;
    let jVarLocalToUrl = `/Cleaning/POS/Booking/${inBranchName}/QrCodeMenu/Scan/QrCodeTree/QrCodeTree.html`;

    const myUrlWithParams = new URL(`${window.location.origin}${jVarLocalToUrl}`);

    myUrlWithParams.searchParams.append("Qrcode", inQrCode);

    window.location.href = myUrlWithParams.href;
};

export { StartFunc };