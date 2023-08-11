import { StartFunc as StartFuncItemsInOrder } from "../../../FromLocalStorage/ItemsInOrder/Bulk.js"

let StartFunc = () => {
    let jVarLocalOrderItemsData = StartFuncItemsInOrder();

    let jVarLocalToShowData = {};

    Object.entries(jVarLocalOrderItemsData).forEach(
        ([key, value]) => {
            jVarLocalToShowData[key] = {};
            jVarLocalToShowData[key].ItemSerial = value.ItemSerial;
            jVarLocalToShowData[key].Category = value.Category;
            jVarLocalToShowData[key].ItemName = value.ItemName;
            jVarLocalToShowData[key].ItemNamePk = value.ItemNamePk;
            jVarLocalToShowData[key].location = value.location;
            jVarLocalToShowData[key].locationPk = value.locationPk;
            jVarLocalToShowData[key].Pcs = value.Pcs;
            jVarLocalToShowData[key].Rate = value.Rate;
            jVarLocalToShowData[key].DisPer = value.DisPer;
            jVarLocalToShowData[key].DeliveryDateTime = value.DeliveryDateTime;
        }
    );

    return jVarLocalToShowData;
};

export { StartFunc };