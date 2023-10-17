import { StartFunc as StartFuncFromAddOnsAll } from "../../../FromLocalStorage/AddOnData/Bulk.js";

let StartFunc = ({ inItemData }) => {
    Object.entries(inItemData).forEach(
        ([key, value]) => {
//            value.Total = value.Rate * value.Pcs;
            value.TotalOriginal = value.Rate * value.Pcs;
           // value.Total = value.TotalOriginal * ((100 - value.DisPer) / 100);
           
            value.TotalAfterDiscount = value.TotalOriginal * ((100 - value.DisPer) / 100);
            value.TotalBeforeRounded = value.TotalAfterDiscount + jFLocalConsiderAddOnData({ inItemSerial: value.ItemSerial });
            // value.Total = Number(value.TotalOriginal.toFixed(2));

            value.Total = Number(value.TotalBeforeRounded.toFixed(2));
        }
    );
};

let jFLocalConsiderAddOnData = ({ inItemSerial }) => {
    let jVarLocalAddOnData = StartFuncFromAddOnsAll();

    let jVarLocalFilered = jFLocalFilterData({
        inData: jVarLocalAddOnData,
        inItemSerial
    });

    if (jVarLocalFilered.length > 0) {
        let jVarLocalAddOnRateArray = jVarLocalFilered.map(element => {
            return element.AddOnRate;
        });

        const sum = jVarLocalAddOnRateArray.reduce((a, b) => a + b, 0);

        return sum;
    };

    return 0;
};

let StartFunc1 = ({ inItemData }) => {
    let jVarLocalAddOnData = StartFuncFromAddOnsAll();

    Object.entries(inItemData).forEach(
        ([key, value]) => {
            value.Total = value.Rate * value.Pcs;

            let jVarLocalFilered = jFLocalFilterData({
                inData: jVarLocalAddOnData,
                inItemSerial: value.ItemSerial
            });

            if (jVarLocalFilered.length > 0) {
                let jVarLocalAddOnRateArray = jVarLocalFilered.map(element => {
                    return element.AddOnRate;
                });

                const sum = jVarLocalAddOnRateArray.reduce((a, b) => a + b, 0);
                value.Total = value.Total + sum;
            };
        }
    );
};

let jFLocalFilterData = ({ inData, inItemSerial }) => {
    let jVarLocaljVarLocalItemsInOrderJson = inData;

    let jVarLocalAddOnArray = Object.keys(jVarLocaljVarLocalItemsInOrderJson).map(
        key => {
            return {
                RowPk: key,
                ...jVarLocaljVarLocalItemsInOrderJson[key]
            };
        }
    );

    let jVarLocalFilered = jVarLocalAddOnArray.filter(element => {
        return element.AddOnItemSerial === inItemSerial;
    });

    return jVarLocalFilered;
};

export { StartFunc };