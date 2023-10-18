// import ApiConfigJson from "../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = ({ inCustomerName, inCustomerMobile }) => {
    //     let inBranchName = ApiConfigJson.BranchName;
    //     let jVarLocalToUrl = `/Cleaning/POS/Booking/${inBranchName}/NewOrder/NewOrder.html`;
    //     let jVarLocalAddNew = "true";

    //     const myUrlWithParams = new URL(`${window.location.origin}${jVarLocalToUrl}`);

    //     myUrlWithParams.searchParams.append("CustomerName", inCustomerName);
    //     myUrlWithParams.searchParams.append("CustomerMobile", inCustomerMobile);

    //     window.location.href = myUrlWithParams.href;

    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    params1.append("CustomerName", inCustomerName);
    params1.append("CustomerMobile", inCustomerMobile);
    let NewURl = new URL("../NewOrder/NewOrder.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    window.location.href = new_url.href;
};

export { StartFunc };