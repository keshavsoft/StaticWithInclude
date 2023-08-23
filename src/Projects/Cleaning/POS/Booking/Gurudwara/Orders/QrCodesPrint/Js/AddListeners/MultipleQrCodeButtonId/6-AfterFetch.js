import { StartFunc as StartFuncQrCodeToModal } from "./QrCodeToModal.js";
// import DataJson from './Data.json' assert {type: 'json'};

let StartFunc = ({ inQrCodeData }) => {
    let jFLocalData = inQrCodeData;
    StartFuncQrCodeToModal({ inData: jFLocalData }).then();
};

export { StartFunc };