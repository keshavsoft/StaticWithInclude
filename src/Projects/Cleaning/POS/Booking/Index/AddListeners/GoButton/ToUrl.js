import ConfigJson from "../../../../../Config.json" assert {type: 'json'};

let StartFunc = ({ inCustomerName, inCustomerMobile}) => {
    let jVarLocalToUrl = "/Cleaning/POS/Booking/BranchWise/NewOrderRowFetch/NewOrderRowFetch.html";
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