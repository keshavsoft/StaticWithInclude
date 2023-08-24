import { StartFunc as StartFuncQrCodeToModal } from "./QrCodeToModal.js";
// import DataJson from './Data.json' assert {type: 'json'};

let StartFunc = ({ inQrCodeData }) => {
    // let jFLocalData = inQrCodeData;

    let jFLocalData = jFLocalAddOnData({ inQrCodeData });

    StartFuncQrCodeToModal({ inData: jFLocalData }).then();
};

let jFLocalAddOnData = ({ inQrCodeData }) => {
    let jFLocalTotalQrCodes = inQrCodeData.length;

    let jFLocalData = inQrCodeData.map(element => {
        element.AddOnDataAsString = element.BookingData.AddOnData.map(LoopAddOn => {
            return LoopAddOn.AddOnRate > 0 ? `${LoopAddOn.AddOnService}@${LoopAddOn.AddOnRate}` : LoopAddOn.AddOnService;
        }).join(", ");

        element.TotalQrCodes = jFLocalTotalQrCodes;
        // element.AddOnDataAsString = element.BookingData.AddOnData.map(LoopAddOn => {
        //     return LoopAddOn.AddOnService
        // }).join(", ");

        return element;
    });

    return jFLocalData;
};

export { StartFunc };