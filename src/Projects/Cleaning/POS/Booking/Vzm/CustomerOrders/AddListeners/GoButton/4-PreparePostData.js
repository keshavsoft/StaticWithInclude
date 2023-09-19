import ConfigJson from "../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalHtmlId = "ScanId";
    let jVarLocalScanId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalScanIdValue = jVarLocalScanId.value;
    let jVarLocalArray = jVarLocalScanIdValue.split(":");
    let jVarLocalCustomerName = jVarLocalArray[0].trim();
    let jVarLocalCustomerMobile = "";

    if (jVarLocalCustomerName.length > 1) {
        jVarLocalCustomerMobile = jVarLocalArray[1].trim()
    };

    let jVarLocalBody = {
        FolderName: "Transactions",
        FileNameOnly: ConfigJson.JsonFileNameOnly,
        ItemName: "Orders",
        FilterString: `value.CustomerData.CustomerName === '${jVarLocalCustomerName}'`
    };

    return jVarLocalBody;
};

export { StartFunc };