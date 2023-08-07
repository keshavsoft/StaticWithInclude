import { StartFunc as StartFuncToUrl } from "./ToUrl.js";

const StartFunc = () => {
    let jVarLocalHtmlId = "ScanId";
    let jVarLocalScanId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalScanIdValue = jVarLocalScanId.value;
    let jVarLocalArray = jVarLocalScanIdValue.split(":");
    let jVarLocalCustomerName = jVarLocalArray[0].trim();
    let jVarLocalCustomerMobile = "";

    let jVarLocalHtmlIdBranchNameInHtml = "BranchNameInHtml";
    let jVarLocalBranchNameInHtml = document.getElementById(jVarLocalHtmlIdBranchNameInHtml);

    if (jVarLocalCustomerName.length > 1) {
        jVarLocalCustomerMobile = jVarLocalArray[1].trim()
    };

    StartFuncToUrl({
        inCustomerName: jVarLocalCustomerName,
        inCustomerMobile: jVarLocalCustomerMobile,
        inBranchName: jVarLocalBranchNameInHtml.value
    });
};

export { StartFunc };