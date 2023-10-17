import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../ToLocalStorage/OrdersData/ToBranch.js";
import ApiConfigJson from '../../../../../../ApiConfig.json' assert {type: 'json'};

let StartFunc = ({ inFromFetch }) => {
    let data = inFromFetch;

    if (data) {
        let jVarLocalBranchName = ApiConfigJson.BranchName;
        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;


        document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(jFLocalInsertAggValues({ inData: data.JsonData }));

        StartFuncToLocalStorage({
            inData: data.JsonData,
            inBranchName: jVarLocalBranchName
        });
    };
};

let jFLocalInsertAggValues = ({ inData }) => {
    let jVarLocalReturnObject = {};

    jVarLocalReturnObject = Object.fromEntries(Object.entries(inData).map(element => {
        element[1].AggValues = {};
        element[1].AggValues.ItemDetails = `${Object.keys(element[1].ItemsInOrder).length} / ${Object.values(element[1].ItemsInOrder).map(p => p.Pcs).reduce((acc, val) => acc + val)}`;
        element[1].AggValues.SettlementAmount = element[1].CheckOutData.CardAmount + element[1].CheckOutData.CashAmount + element[1].CheckOutData.UPIAmount;

        return element;
    }));

    return jVarLocalReturnObject;
};

export { StartFunc };