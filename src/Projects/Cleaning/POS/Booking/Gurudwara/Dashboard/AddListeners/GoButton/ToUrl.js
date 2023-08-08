// import ConfigJson from "../../../../../Config.json" assert {type: 'json'};
// import ConfigJson from "../../../../../../Config.json" assert {type: 'json'};
import ConfigJson from "../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = ({ inCustomerName, inCustomerMobile, inBranchName }) => {
    // let jVarLocalToUrl = "/Cleaning/POS/Booking/BranchWise/NewOrderRowFetch/NewOrderRowFetch.html";
    let jVarLocalToUrl = `/Cleaning/POS/Booking/${inBranchName}/NewOrder/NewOrder.html`;
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