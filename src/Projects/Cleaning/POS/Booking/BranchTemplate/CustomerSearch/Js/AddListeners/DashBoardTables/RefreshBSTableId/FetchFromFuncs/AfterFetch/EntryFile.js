// import { StartFunc as StartFuncKSMainTableRowDeleteClass } from "./KSMainTableRowDeleteClass/1-ClickAssign.js";
// import { StartFunc as StartFuncPrepareColumns } from "./BuildTable/PrepareColumns.js";
import { StartFunc as StartFuncAddListeners } from "../../../../../AddListeners/StartFunc.js";

let StartFunc = ({ inDataToShow, inQrCodeData }) => {
    jFLocalHideSpinner();
    let jVarLocalDataToShow = jFLocalToArray({ inDataToShow });

    var $table = $('#table');
    let jVarLocalTransformedData = jFLocalInsertAggValues({ inData: jVarLocalDataToShow });
    let jVarWithQrCodeData = jFLocalInsertQrCodeData({ inData: jVarLocalTransformedData, inQrCodeData: inQrCodeData });
    // StartFuncPrepareColumns({ data: jVarLocalDataToShow.DataFromServer[0].KData.TableColumns })
    $table.bootstrapTable("destroy").bootstrapTable({
        data: jVarLocalDataToShow,
    });

    StartFuncAddListeners();
    // StartFuncKSMainTableRowDeleteClass();
};

let jFLocalToArray = ({ inDataToShow }) => {
    let jVarLocalArray = [];
    Object.entries(inDataToShow).forEach(
        ([key, value]) => {
            jVarLocalArray.push({
                ...value,
                pk: key
            });
        }
    );

    return jVarLocalArray;
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";

};

// let jFLocalInsertAggValues = ({ inData }) => {
//     let jVarLocalReturnObject = {};

//     jVarLocalReturnObject = Object.fromEntries(Object.entries(inData).map(element => {
//         element[1].AggValues = {};
//         element[1].AggValues.ItemDetails = `${Object.keys(element[1].ItemsInOrder).length} / ${Object.values(element[1].ItemsInOrder).map(p => p.Pcs).reduce((acc, val) => acc + val)}`;
//         element[1].AggValues.SettlementAmount = element[1].CheckOutData.CardAmount + element[1].CheckOutData.CashAmount + element[1].CheckOutData.UPIAmount;

//         return element;
//     }));

//     return jVarLocalReturnObject;
// };

let jFLocalInsertAggValues = ({ inData }) => {
    let jVarLocalReturnObject = [];

    jVarLocalReturnObject = Object.entries(inData).map(element => {
        element[1].AggValues = {};
        element[1].AggValues.ItemDetails = `${Object.keys(element[1].ItemsInOrder).length} / ${Object.values(element[1].ItemsInOrder).map(p => p.Pcs).reduce((acc, val) => acc + val)}`;
        element[1].AggValues.SettlementAmount = element[1].CheckOutData.CardAmount + element[1].CheckOutData.CashAmount + element[1].CheckOutData.UPIAmount;
        element[1].IsSettled = false;

        if (Object.keys(element[1].CheckOutData).length > 0) {
            element[1].IsSettled = true;
        };

        return element[1];
    });

    return jVarLocalReturnObject;
};

let jFLocalInsertQrCodeData = ({ inData, inQrCodeData }) => {

    let jVarLocalReturnArray = [];

    jVarLocalReturnArray = inData.map(element => {

        element.QrCodes = inQrCodeData[element.pk];
        element.IsQrCodesRaised = false;
        if (element.pk in inQrCodeData) {
            element.IsQrCodesRaised = true;
        };
        return element;
    });
    return jVarLocalReturnArray;
};


export { StartFunc }