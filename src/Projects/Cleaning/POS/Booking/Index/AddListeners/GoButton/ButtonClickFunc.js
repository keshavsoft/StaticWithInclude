import ConfigJson from "../../../Config.json" assert {type: 'json'};
import { StartFunc as StartFuncToUrl } from "./ToUrl.js";

const StartFunc = () => {
    let jVarLocalHtmlId = "ScanId";
    let jVarLocalScanId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalScanIdValue = jVarLocalScanId.value;
    let jVarLocalArray = jVarLocalScanIdValue.split(":");
    let jVarLocalCustomerName = jVarLocalArray[0].trim();
    let jVarLocalCustomerMobile = "";


    if (jVarLocalCustomerName.length > 1) {
        jVarLocalCustomerMobile = jVarLocalArray[1].trim()
    };

    StartFuncToUrl({ inCustomerName: jVarLocalCustomerName, inCustomerMobile: jVarLocalCustomerMobile });
};

let jFLocalToUrl = ({ inCustomerName, inCustomerMobile }) => {
    let jVarLocalToUrl = "/public/Html/Cleaning/POS/Booking/Tabs/AddItem/AddItemCommon.html";
    let jVarLocalBranchName = ConfigJson.BranchName;
    let jVarLocalAddNew = "true";

    const myUrlWithParams = new URL(`${window.location.origin}${jVarLocalToUrl}`);

    myUrlWithParams.searchParams.append("CustomerName", inCustomerName);
    myUrlWithParams.searchParams.append("CustomerMobile", inCustomerMobile);
    myUrlWithParams.searchParams.append("BranchName", jVarLocalBranchName);
    myUrlWithParams.searchParams.append("AddNew", jVarLocalAddNew);

    window.location.href = myUrlWithParams.href;
};

export { StartFunc };