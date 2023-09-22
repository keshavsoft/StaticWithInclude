import { StartFunc as StartFuncForTree } from "../../ForTree/EntryFileForObject.js";

let StartFunc = async ({ inFromFetch }) => {
    if (inFromFetch.KTF === false) {
        Swal.fire({
            icon: 'error',
            title: 'Qr Code Not Raised',
            text: inFromFetch.KReason
        });
    }
    else {
        StartFuncForTree({ inFromFetch });

        // await StartFuncForTree({ inFromFetch });
    }
};

let jFPrepareDataForTree = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch;

    if ("KTF" in jVarLocalData) {
        if (jVarLocalData.KTF) {
            return jVarLocalData.JsonData;
        } else {
            return jVarLocalData;
        };
    };
};

let jFLoop = ({ inDataValue, inText }) => {
    let LoopObject = {};
    LoopObject.text = inText;
    LoopObject.icon = "fa fa-inbox fa-fw";

    if (inDataValue === null) {
        LoopObject.text += ` ( ${inDataValue} )`;
    } else {
        if (typeof inDataValue === 'object') {
            LoopObject.nodes = Object.keys(inDataValue).map(element => {
                return jFLoop({
                    inDataValue: inDataValue[element],
                    inText: element
                });
            });
        } else {
            LoopObject.text += ` ( ${inDataValue} )`;
        };
    };

    return LoopObject;
};

const StartFuncForTree11 = async ({ inFromFetch }) => {
    let data = jFPrepareDataForTree({ inFromFetch });

    let NewData = Object.keys(data).map(element => {
        return jFLoop({
            inDataValue: data[element],
            inText: element
        });
    });

    $('#tree').bstreeview({
        data: NewData,
        expandIcon: 'fa fa-angle-down fa-fw',
        collapseIcon: 'fa fa-angle-right fa-fw',
        indent: 2,
        parentsMarginLeft: '1.25rem',
        openNodeLinkOnNewTab: true
    });
    jFLocalHtmlFocusScanId();
    jFLocalToInputScanId({ inScanId: "" });
};

let jFLocalFromDomScanId = () => {
    let jVarLocalHtmlScanId = 'ScanId';
   let jVarHtmlScanId = document.getElementById(jVarLocalHtmlScanId);
   let jVarHtmlScanIdValue = jVarHtmlScanId.value.trim();
   return jVarHtmlScanIdValue;
};

let jFLocalHtmlFocusScanId = () => {
    let jVarLocalHtmlId = 'ScanId';
    let jVarLocalScanId = document.getElementById(jVarLocalHtmlId);
    jVarLocalScanId.focus();
};

let jFLocalToInputScanId = ({ inScanId }) => {
    let jVarLocalHtmlId = 'ScanId';
    let jVarLocalScanId = document.getElementById(jVarLocalHtmlId);
    jVarLocalScanId.value = inScanId;
};

const StartFuncForTree1 = async ({ inFromFetch }) => {
    let data = jFPrepareDataForTree({ inFromFetch });

    let NewData = Object.keys(data).map(element => {
        return jFLoop({
            inDataValue: data[element],
            inText: element
        });
    });

    $('#tree').bstreeview({
        data: NewData,
        expandIcon: 'fa fa-angle-down fa-fw',
        collapseIcon: 'fa fa-angle-right fa-fw',
        indent: 2,
        parentsMarginLeft: '1.25rem',
        openNodeLinkOnNewTab: true
    });
    let QrCodeNumber = jFLocalFromDomScanId();
    let queryString = `${window.location.origin}/Cleaning/POS/Booking/Kakinada/QrCode/QrCode.html`;

    const myUrlWithParams = new URL(queryString);

    myUrlWithParams.searchParams.append("Qrcode", QrCodeNumber);

    window.location.href = myUrlWithParams.href;

    jFLocalHtmlFocusScanId();
    jFLocalToInputScanId({ inScanId: "" });
};
export { StartFunc };