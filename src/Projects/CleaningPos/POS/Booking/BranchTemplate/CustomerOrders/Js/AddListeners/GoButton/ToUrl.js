import ApiConfigJson from "../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = ({ inCustomerName, inCustomerMobile}) => {
    let inBranchName = ApiConfigJson.BranchName;
    let jVarLocalToUrl = `/Cleaning/POS/Booking/${inBranchName}/NewOrder/NewOrder.html`;
    let jVarLocalAddNew = "true";

    const myUrlWithParams = new URL(`${window.location.origin}${jVarLocalToUrl}`);

    myUrlWithParams.searchParams.append("CustomerName", inCustomerName);
    myUrlWithParams.searchParams.append("CustomerMobile", inCustomerMobile);

    window.location.href = myUrlWithParams.href;
};

export { StartFunc };