import ApiConfigJson from "../../../ApiConfig.json" assert {type: 'json'};

let StartFunc = ({ inCustomerName, inCustomerMobile }) => {
    let inBranchName = ApiConfigJson.BranchName;
    //let jVarLocalToUrl = `/Cleaning/POS/Booking/${inBranchName}/NewOrder/NewOrder.html`;
    let jVarLocalToUrl = `../NewOrder/NewOrder.html`;
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);

    console.log("params1 : ", params1);

    params1.append("CustomerName", inCustomerName);
    params1.append("CustomerMobile", inCustomerMobile);

    console.log("params2 : ", params1);
    //const myUrlWithParams = new URL(`${window.location.origin}${jVarLocalToUrl}`);

    // const myUrlWithParams = new URL(jVarLocalToUrl, document.baseURI);

    const myUrlWithParams = new URL(`${jVarLocalToUrl}?${params1}`, document.baseURI);

    //    const new_url = new URL(`${NewURl.href}?${params1}`);

    // myUrlWithParams.searchParams.append("CustomerName", inCustomerName);
    // myUrlWithParams.searchParams.append("CustomerMobile", inCustomerMobile);
    // myUrlWithParams.searchParams.append("BranchName", inBranchName);

    window.location.href = myUrlWithParams.href;
};

export { StartFunc };