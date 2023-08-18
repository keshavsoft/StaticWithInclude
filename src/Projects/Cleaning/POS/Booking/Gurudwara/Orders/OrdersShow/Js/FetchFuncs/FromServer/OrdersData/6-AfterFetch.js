import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../ToLocalStorage/OrdersData/ToBranch.js";
import ApiConfigJson from '../../../../../../ApiConfig.json' assert {type: 'json'};

let StartFunc = ({ inFromFetch }) => {
    let data = inFromFetch;

    if (data) {
        let jVarLocalBranchName = ApiConfigJson.BranchName;
        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
        document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(data.JsonData);

        StartFuncToLocalStorage({
            inData: data.JsonData,
            inBranchName: jVarLocalBranchName
        });
        // localStorage.setItem("OrdersData", JSON.stringify(data.JsonData));
    };
};

export { StartFunc };