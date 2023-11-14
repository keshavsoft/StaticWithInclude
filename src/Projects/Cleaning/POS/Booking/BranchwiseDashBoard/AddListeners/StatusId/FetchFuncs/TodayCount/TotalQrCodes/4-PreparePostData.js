import ApiConfig from "../../../../../../ApiConfig.json" assert{type: 'json'};

const StartFunc = () => {
    let jVarLocalBodyData = {};
    jVarLocalBodyData.FolderName = "QrCodes";
    jVarLocalBodyData.FileNameOnly = "Generate";
    jVarLocalBodyData.ItemName = "Barcodes";
    // jVarLocalBodyData.FilterString = "(value.GenerateReference.FileNameOnly === `${ApiConfig.ForFetch.FileNameOnly}`)&&(new Date(value.OrderData.Currentdateandtime)).toLocaleDateString() === `${(new Date()).toLocaleDateString()}`";
    // jVarLocalBodyData.FilterString = "(new Date(value.BookingData.OrderData.Currentdateandtime)).toLocaleDateString() === `${(new Date()).toLocaleDateString()}`";
    // jVarLocalBodyData.FilterString = `(value.GenerateReference.FileNameOnly === '${ApiConfig.ForFetch.FileNameOnly}')&&((new Date(value.BookingData.OrderData.Currentdateandtime)).toLocaleDateString() === '${(new Date()).toLocaleDateString()}')`;
    jVarLocalBodyData.FilterString = `(value.GenerateReference.FileNameOnly === '${ApiConfig.ForFetch.FileNameOnly}')&&((new Date(value.BookingData.OrderData.Currentdateandtime)).toLocaleDateString() ===`+ "`${(new Date()).toLocaleDateString()}`)";


    return jVarLocalBodyData;
};

export { StartFunc };